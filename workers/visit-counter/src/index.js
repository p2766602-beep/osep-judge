// osep-judge累計造訪次數計數器：POST /hit 讓KV裡的counter+1，回傳目前總數。
// 單純統計用途，不做去重、不記錄任何個人資訊，只有一個固定key累加。
// Cloudflare KV是最終一致性儲存，高併發下get-then-put可能漏算幾次，
// 但這裡的需求是「單純累計造訪次數」的概略統計，不要求精確到個位數，
// 不需要為此換成Durable Objects這種更複雜的方案。

const COUNTER_KEY = 'total';

function corsHeaders(origin, allowedOrigins) {
  const allowOrigin = allowedOrigins.includes(origin) ? origin : allowedOrigins[0];
  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  };
}

function jsonResponse(body, status, headers) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...headers },
  });
}

function parseAllowedOrigins(env) {
  return (env.ALLOWED_ORIGINS || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin') || '';
    const allowedOrigins = parseAllowedOrigins(env);
    const headers = corsHeaders(origin, allowedOrigins);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers });
    }

    if (url.pathname === '/hit' && (request.method === 'POST' || request.method === 'GET')) {
      const current = parseInt((await env.VISIT_COUNTER.get(COUNTER_KEY)) || '0', 10);
      const next = current + 1;
      await env.VISIT_COUNTER.put(COUNTER_KEY, String(next));
      return jsonResponse({ count: next }, 200, headers);
    }

    if (url.pathname === '/count' && request.method === 'GET') {
      const current = parseInt((await env.VISIT_COUNTER.get(COUNTER_KEY)) || '0', 10);
      return jsonResponse({ count: current }, 200, headers);
    }

    return jsonResponse({ error: 'not found' }, 404, headers);
  },
};
