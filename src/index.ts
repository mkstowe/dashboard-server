import {
  getAuth,
  oidcAuthMiddleware,
  processOAuthCallback,
  revokeSession,
} from "@hono/oidc-auth";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { hass } from "./routes/hass";
import { options } from "./routes/options";

// ┌
// │ Setup
// └

const app = new Hono();

app.use(
  "/*",
  cors({
    origin: ["http://localhost:4200", "https://mkstowe.com"],
  })
);

app.use("*", oidcAuthMiddleware());

app.route("/options", options);
app.route("/hass", hass);

// ──────────────────────────────────────────────────────────────────────

// ─[ For cron job to keep server alive ]──────────────────────────────
app.get("/wake", (c) => c.text("Wakey wakey!"));

// ┌
// │ Auth
// └

app.get("/logout", async (c) => {
  await revokeSession(c);
  return c.text("Successfully logged out.");
});

app.get("/callback", async (c) => {
  return processOAuthCallback(c);
});

app.get("/", async (c) => {
  const auth = await getAuth(c);
  return c.text(`Hello <${auth?.email}>!`);
});

// ──────────────────────────────────────────────────────────────────────

export default app;
