import devServer from "@hono/vite-dev-server";
import adapter from "@hono/vite-dev-server/cloudflare";
import { defineConfig } from "vite";
import dotenv from "dotenv";

dotenv.config();

const port: number = (process.env.PORT && +process.env.PORT) || 3000;

export default defineConfig({
  server: {
    port,
  },
  plugins: [
    devServer({
      adapter,
      entry: "src/index.ts",
    }),
  ],
});
