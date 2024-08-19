import { Hono } from "hono";
import { options } from "./routes/options";
import { hass } from "./routes/hass";
import { cors } from "hono/cors";

const app = new Hono();

app.use('/*', cors(
    {
        origin: ['http://localhost:4200', 'https://mkstowe.com']
    }
))

app.route("/options", options);
app.route("/hass", hass);

app.get('/wake', (c) => c.text(''));

export default app;
