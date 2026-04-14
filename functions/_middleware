export async function onRequest(context) {
  console.log("Request:", {
    url: context.request.url,
    userAgent: context.request.headers.get("user-agent"),
    ip: context.request.headers.get("cf-connecting-ip"),
  });
  return context.next();
}
