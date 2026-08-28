export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return res.status(500).json({
      success: false,
      error: 'TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not configured in server environment.'
    });
  }

  try {
    // Read raw body chunks from incoming multipart/form-data
    const chunks = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);
    const contentType = req.headers['content-type'] || '';

    // Determine target Telegram method based on header / content
    const tgUrl = `https://api.telegram.org/bot${botToken}/sendPhoto`;

    const tgResponse = await fetch(tgUrl, {
      method: 'POST',
      headers: {
        'Content-Type': contentType
      },
      body: buffer
    });

    const tgData = await tgResponse.json();

    if (!tgResponse.ok || !tgData.ok) {
      // If sendPhoto failed (e.g. if file is a PDF document), attempt sendDocument
      const docUrl = `https://api.telegram.org/bot${botToken}/sendDocument`;
      const docResponse = await fetch(docUrl, {
        method: 'POST',
        headers: {
          'Content-Type': contentType
        },
        body: buffer
      });
      const docData = await docResponse.json();
      return res.status(docResponse.status).json(docData);
    }

    return res.status(200).json(tgData);
  } catch (error) {
    console.error('Telegram dispatch error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}

