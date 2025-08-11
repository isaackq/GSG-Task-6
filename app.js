const http = require("http");

function sendJSON(res, statusCode, body, extraHeaders = {}) {
  const payload = JSON.stringify(body);
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(payload),
    "Cache-Control": "no-store",
    "X-Powered-By": "node:http",
    ...extraHeaders,
  });
  res.end(payload);
}

const routes = {
  "/": (req, res) => sendJSON(res, 200, { message: "Welcome to the app" }),
  "/about": (req, res) =>
    sendJSON(res, 200, { message: "This is the about route" }),
};

const app = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname.replace(/\/$/, "") || "/"; // treat '/' and '' the same

  const handler = routes[pathname];
  if (handler) return handler(req, res);

  return sendJSON(res, 404, { error: "Route not found" });
});

app.listen(3000, () => {
  console.log(` app listening on http://localhost:3000`);
});
