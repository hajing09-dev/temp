export async function onRequest(context) {
  const headers = {};
  for (const [key, value] of context.request.headers.entries()) {
    headers[key] = value;
  }
  
  return new Response(JSON.stringify(headers, null, 2), {
    headers: { "Content-Type": "application/json" }
  });
}
