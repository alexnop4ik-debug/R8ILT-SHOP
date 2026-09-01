export const config = {
  runtime: 'edge',
};

async function createToken(password) {
  const enc = new TextEncoder();
  const data = enc.encode(password + ':r8ilt_admin_secret_salt_2026');
  const hashBuf = await crypto.subtle.digest('SHA-256', data);
  const hashArr = Array.from(new Uint8Array(hashBuf));
  return hashArr.map(b => b.toString(16).padStart(2, '0')).join('');
}

export default async function handler(req) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ success: false, error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await req.json();
    const providedPass = (body.password || '').trim();
    const expectedPass = (process.env.ADMIN_PASS || '').trim();

    if (!expectedPass) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'ADMIN_PASS не задан в переменных окружения Vercel! Укажите ADMIN_PASS в настройках проекта Vercel.',
        }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (providedPass !== expectedPass) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Неверный пароль администратора!',
        }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const token = await createToken(expectedPass);

    return new Response(
      JSON.stringify({
        success: true,
        token: token,
        message: 'Авторизация успешна',
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Ошибка обработки запроса авторизации: ' + err.message,
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
}

