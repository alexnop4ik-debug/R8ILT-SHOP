export const config = {
  runtime: 'edge',
};

async function verifyToken(req) {
  const expectedPass = (process.env.ADMIN_PASS || '').trim();
  if (!expectedPass) return false;

  const enc = new TextEncoder();
  const data = enc.encode(expectedPass + ':r8ilt_admin_secret_salt_2026');
  const hashBuf = await crypto.subtle.digest('SHA-256', data);
  const hashArr = Array.from(new Uint8Array(hashBuf));
  const expectedToken = hashArr.map(b => b.toString(16).padStart(2, '0')).join('');

  const authHeader = req.headers.get('authorization') || '';
  const token = authHeader.replace(/^Bearer\s+/i, '').trim();
  const passHeader = req.headers.get('x-admin-pass') || '';

  return token === expectedToken || passHeader === expectedPass;
}

export default async function handler(req) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-admin-pass',
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  // Security Verification
  const isAuthorized = await verifyToken(req);
  if (!isAuthorized) {
    return new Response(
      JSON.stringify({ success: false, error: 'Доступ запрещен. Неверный или истекший токен авторизации.' }),
      { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  const supabaseUrl = process.env.SUPABASE_URL || '';
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || '';

  if (!supabaseUrl || !supabaseKey) {
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Отсутствуют SUPABASE_URL или SUPABASE_ANON_KEY / SUPABASE_SERVICE_ROLE_KEY в переменных окружения.',
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  const sbHeaders = {
    'apikey': supabaseKey,
    'Authorization': `Bearer ${supabaseKey}`,
    'Content-Type': 'application/json',
    'Prefer': 'return=representation',
  };

  try {
    const url = new URL(req.url);
    const action = url.searchParams.get('action') || '';
    const productId = url.searchParams.get('id');

    // 1. Action: UPLOAD Image to Supabase Storage
    if (action === 'upload' && req.method === 'POST') {
      const formData = await req.formData();
      const file = formData.get('file');

      if (!file || typeof file === 'string') {
        return new Response(JSON.stringify({ success: false, error: 'Файл изображения не передан.' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      const fileExt = file.name ? file.name.split('.').pop() : 'jpg';
      const cleanFileName = `prod_${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
      const uploadPath = `${supabaseUrl}/storage/v1/object/product-images/${cleanFileName}`;

      const uploadRes = await fetch(uploadPath, {
        method: 'POST',
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': file.type || 'image/jpeg',
          'x-upsert': 'true',
        },
        body: file,
      });

      if (!uploadRes.ok) {
        const errText = await uploadRes.text();
        return new Response(
          JSON.stringify({ success: false, error: 'Ошибка загрузки в Supabase Storage: ' + errText }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const publicUrl = `${supabaseUrl}/storage/v1/object/public/product-images/${cleanFileName}`;
      return new Response(JSON.stringify({ success: true, url: publicUrl }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // 2. Action: BATCH REORDER (Обновление позиций/высоты товаров в каталоге)
    if (action === 'reorder' && req.method === 'POST') {
      const body = await req.json();
      const items = body.items || []; // Array of { id, display_order }

      for (const item of items) {
        if (item.id !== undefined && item.display_order !== undefined) {
          await fetch(`${supabaseUrl}/rest/v1/products?id=eq.${item.id}`, {
            method: 'PATCH',
            headers: sbHeaders,
            body: JSON.stringify({ display_order: item.display_order, updated_at: new Date().toISOString() }),
          });
        }
      }

      return new Response(JSON.stringify({ success: true, message: 'Порядок товаров успешно обновлен!' }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // 3. GET All Products (Admin view)
    if (req.method === 'GET') {
      const fetchRes = await fetch(`${supabaseUrl}/rest/v1/products?select=*&order=display_order.asc,id.asc`, {
        method: 'GET',
        headers: sbHeaders,
      });

      if (!fetchRes.ok) {
        const errText = await fetchRes.text();
        return new Response(JSON.stringify({ success: false, error: errText }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      const products = await fetchRes.json();
      return new Response(JSON.stringify({ success: true, products }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // 4. POST Create Product
    if (req.method === 'POST') {
      const productData = await req.json();
      productData.created_at = new Date().toISOString();
      productData.updated_at = new Date().toISOString();

      const insertRes = await fetch(`${supabaseUrl}/rest/v1/products`, {
        method: 'POST',
        headers: sbHeaders,
        body: JSON.stringify(productData),
      });

      if (!insertRes.ok) {
        const errText = await insertRes.text();
        return new Response(JSON.stringify({ success: false, error: errText }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      const created = await insertRes.json();
      return new Response(JSON.stringify({ success: true, product: created[0] || created }), {
        status: 201,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // 5. PUT Update Product
    if (req.method === 'PUT') {
      const idToUpdate = productId || (await req.clone().json()).id;
      if (!idToUpdate) {
        return new Response(JSON.stringify({ success: false, error: 'Не указан ID товара для обновления.' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      const updateData = await req.json();
      delete updateData.id;
      updateData.updated_at = new Date().toISOString();

      const updateRes = await fetch(`${supabaseUrl}/rest/v1/products?id=eq.${idToUpdate}`, {
        method: 'PATCH',
        headers: sbHeaders,
        body: JSON.stringify(updateData),
      });

      if (!updateRes.ok) {
        const errText = await updateRes.text();
        return new Response(JSON.stringify({ success: false, error: errText }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      const updated = await updateRes.json();
      return new Response(JSON.stringify({ success: true, product: updated[0] || updated }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // 6. DELETE Product
    if (req.method === 'DELETE') {
      if (!productId) {
        return new Response(JSON.stringify({ success: false, error: 'Не указан ID товара для удаления.' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      const deleteRes = await fetch(`${supabaseUrl}/rest/v1/products?id=eq.${productId}`, {
        method: 'DELETE',
        headers: sbHeaders,
      });

      if (!deleteRes.ok) {
        const errText = await deleteRes.text();
        return new Response(JSON.stringify({ success: false, error: errText }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      return new Response(JSON.stringify({ success: true, message: 'Товар успешно удален.' }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: false, error: 'Неизвестный метод или действие.' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: 'Серверная ошибка: ' + err.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
}

