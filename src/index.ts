import { Hono } from "hono";
import { options } from "./routes/options";
import { hass } from "./routes/hass";

const app = new Hono();
app.route("/options", options);
app.route("/hass", hass);

export default app;
