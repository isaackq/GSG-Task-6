# Task 6 — Basic HTTP Server with JSON (Native `http`)

Build & run locally:

```bash
node -v               # ensure Node 16+
npm start             # or: node app.js
```

The server listens on **port 3000** (configurable via `PORT`).

## Routes

- `GET /` → `{ "message": "Welcome to the server" }`
- `GET /about` → `{ "message": "This is the about route" }`
- Any other route → `404` with `{ "error": "Route not found" }`

## Test quickly

```bash
curl -i http://localhost:3000/
curl -i http://localhost:3000/about
curl -i http://localhost:3000/unknown
```
