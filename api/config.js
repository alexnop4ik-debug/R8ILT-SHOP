export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  return new Response(
    JSON.stringify({
      supabaseUrl: process.env.SUPABASE_URL || '',
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY || '',
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 's-maxage=3600, stale-while-revalidate',
        'Access-Control-Allow-Origin': '*',
      },
    }
  );
}

