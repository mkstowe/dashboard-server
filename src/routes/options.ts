import { Hono } from "hono";
import { getOptions, getOptionsByGroup } from "../repos/options-repo";

export const options = new Hono();

options.get("/", async (c) => {
  const _options = await getOptions();
  return c.json(_options);
});

options.get("/group/:group", async (c) => {
  const group = c.req.param("group");
  const options = await getOptionsByGroup(group);
  return c.json(options);
});
