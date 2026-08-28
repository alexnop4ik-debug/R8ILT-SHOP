export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  // CORS Headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
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

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID in environment variables.',
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  try {
    const formData = await req.formData();
    const caption = formData.get('caption') || '';
    const photo = formData.get('photo');
    const secondMessage = formData.get('second_message') || '';

    const tgFormData = new FormData();
    tgFormData.append('chat_id', chatId.trim());
    tgFormData.append('parse_mode', 'HTML');

    let tgMethod = 'sendMessage';

    if (photo && typeof photo === 'object' && photo.size > 0) {
      const isPdf = photo.type === 'application/pdf' || (photo.name && photo.name.endsWith('.pdf'));
      tgMethod = isPdf ? 'sendDocument' : 'sendPhoto';
      tgFormData.append(isPdf ? 'document' : 'photo', photo, photo.name || 'receipt.jpg');
      tgFormData.append('caption', caption);
    } else {
      tgFormData.append('text', caption);
    }

    const tgResponse = await fetch(`https://api.telegram.org/bot${botToken.trim()}/${tgMethod}`, {
      method: 'POST',
      body: tgFormData,
    });

    const result = await tgResponse.json();

    // If second message is present (e.g. separate Vinted alert notification)
    if (secondMessage && secondMessage.trim()) {
      try {
        await fetch(`https://api.telegram.org/bot${botToken.trim()}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId.trim(),
            text: secondMessage,
            parse_mode: 'HTML',
          }),
        });
      } catch (err2) {
        console.warn('Failed to send second Telegram message:', err2);
      }
    }

    return new Response(JSON.stringify(result), {
      status: tgResponse.status,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Telegram Serverless Dispatch Error:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message || 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
}
