import { Hono } from "hono";
import {
  createEntity,
  createOptions,
  createService,
  deleteEntity,
  deleteOptions,
  deleteService,
  getEntities,
  getEntity,
  getOption,
  getOptions,
  getService,
  getServices,
  updateEntity,
  updateOptions,
  updateService,
} from "../repos/hass-repo";

export const hass = new Hono();

// ┌
// │ Entities
// └

hass.get("/entities", async (c) => {
  const entities = await getEntities();
  return c.json(entities);
});

hass.get("/entity/:id", async (c) => {
  const id = c.req.param("id");
  const entity = await getEntity(id);
  return c.json(entity);
});

hass.post("/entity", async (c) => {
  const entity = await createEntity(await c.req.json());
  return c.json(entity);
});

hass.patch("/entity/:id", async (c) => {
  const id = c.req.param("id");
  const entity = await updateEntity(id, await c.req.json());
  return c.json(entity);
});

hass.delete("/entity/:id", async (c) => {
  const id = c.req.param("id");
  const entity = await deleteEntity(id);
  return c.json(entity);
});

// ┌
// │ Services
// └

hass.get("/services", async (c) => {
  const services = await getServices();
  return c.json(services);
});

hass.get("/service/:id", async (c) => {
  const id = c.req.param("id");
  const service = await getService(id);
  return c.json(service);
});

hass.post("/service", async (c) => {
  const service = await createService(await c.req.json());
  return c.json(service);
});

hass.patch("/service/:id", async (c) => {
  const id = c.req.param("id");
  const service = await updateService(id, await c.req.json());
  return c.json(service);
});

hass.delete("/service/:id", async (c) => {
  const id = c.req.param("id");
  await deleteService(id);
  return c.json({ message: "Service deleted" });
});

// ┌
// │ State Options
// └

hass.get("/options", async (c) => {
  const options = await getOptions();
  return c.json(options);
});

hass.get("/option/:id", async (c) => {
  const id = c.req.param("id");
  const option = await getOption(id);
  return c.json(option);
});

hass.post("/options", async (c) => {
  const option = await createOptions(await c.req.json());
  return c.json(option);
});

hass.patch("/option/:id", async (c) => {
  const id = c.req.param("id");
  const option = await updateOptions(id, await c.req.json());
  return c.json(option);
});

hass.delete("/option/:id", async (c) => {
  const id = c.req.param("id");
  await deleteOptions(id);
  return c.json({ message: "State Options deleted" });
});
