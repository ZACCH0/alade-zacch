import express from "express";
import { createServer } from "http";
import fs from "node:fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // dist/index.js lives in dist/, static files in dist/public.
  // Prefer that when it exists so `node dist/index.js` works
  // with or without NODE_ENV=production (Windows-friendly).
  const candidates = [
    path.resolve(__dirname, "public"),
    path.resolve(__dirname, "..", "dist", "public"),
  ];
  const staticPath =
    process.env.STATIC_DIR && fs.existsSync(process.env.STATIC_DIR)
      ? process.env.STATIC_DIR
      : candidates.find((p) => fs.existsSync(path.join(p, "index.html"))) ??
        candidates[0];

  app.use(express.static(staticPath));

  // SPA fallback (Express 4 + 5 compatible — no "*" route pattern)
  app.use((_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = Number(process.env.PORT) || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
