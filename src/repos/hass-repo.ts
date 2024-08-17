import { jsonObjectFrom } from "kysely/helpers/postgres";
import { db } from "../db";
import { HassEntityUpdate, NewHassEntity } from "../db/schema/public/HassEntity";
import { HassServiceUpdate, NewHassService } from "../db/schema/public/HassService";
import { HassStateOptionsUpdate, NewHassStateOptions } from "../db/schema/public/HassStateOptions";

export async function getEntities() {
    return await db
      .selectFrom("hassEntity as e")
      .selectAll()
      .select((eb) => [
        "id",
        jsonObjectFrom(
          eb
            .selectFrom("hassStateOptions as so")
            .selectAll()
            .whereRef("so.entity", "=", "e.id")
        ).as("stateOptions"),
      ])
      .select((eb) => [
        "id",
        jsonObjectFrom(
          eb
            .selectFrom("hassService as s")
            .selectAll()
            .whereRef("s.entity", "=", "e.id")
        ).as("service"),
      ])
      .execute();
  }
  
  export async function getEntity(id: any) {
    return await db
      .selectFrom("hassEntity as e")
      .selectAll()
      .select((eb) => [
        "id",
        jsonObjectFrom(
          eb
            .selectFrom("hassStateOptions as so")
            .selectAll()
            .whereRef("so.entity", "=", "e.id")
        ).as("stateOptions"),
      ])
      .select((eb) => [
        "id",
        jsonObjectFrom(
          eb
            .selectFrom("hassService as s")
            .selectAll()
            .whereRef("s.entity", "=", "e.id")
        ).as("service"),
      ])
      .where("e.id", "=", id)
      .executeTakeFirst();
  }
  
  export async function createEntity(entity: NewHassEntity) {
    return await db
      .insertInto("hassEntity")
      .values(entity)
      .returningAll()
      .executeTakeFirstOrThrow();
  }
  
  export async function updateEntity(id: any, updateWith: HassEntityUpdate) {
    return await db
      .updateTable("hassEntity")
      .set(updateWith)
      .where("id", "=", id)
      .returningAll()
      .execute();
  }
  
  export async function deleteEntity(id: any) {
    return await db
      .deleteFrom("hassEntity")
      .where("id", "=", id)
      .returningAll()
      .executeTakeFirst();
  }
  
  //
  //  Services
  //
  
  export async function getServices() {
    return await db.selectFrom("hassService").selectAll().execute();
  }
  
  export async function getService(id: any) {
    return await db
      .selectFrom("hassService")
      .where("id", "=", id)
      .selectAll()
      .executeTakeFirst();
  }
  
  export async function createService(service: NewHassService) {
    return await db
      .insertInto("hassService")
      .values(service)
      .returningAll()
      .executeTakeFirstOrThrow();
  }
  
  export async function updateService(id: any, updateWith: HassServiceUpdate) {
    return await db
      .updateTable("hassService")
      .set(updateWith)
      .where("id", "=", id)
      .returningAll()
      .execute();
  }
  
  export async function deleteService(id: any) {
    return await db
      .deleteFrom("hassService")
      .where("id", "=", id)
      .returningAll()
      .executeTakeFirst();
  }
  
  //
  //  State Options
  //
  
  export async function getOptions() {
    return await db.selectFrom("hassService").selectAll().execute();
  }
  
  export async function getOption(id: any) {
    return await db
      .selectFrom("hassStateOptions")
      .where("id", "=", id)
      .selectAll()
      .executeTakeFirst();
  }
  
  export async function createOptions(opts: NewHassStateOptions) {
    return await db
      .insertInto("hassStateOptions")
      .values(opts)
      .returningAll()
      .executeTakeFirstOrThrow();
  }
  
  export async function updateOptions(
    id: any,
    updateWith: HassStateOptionsUpdate
  ) {
    return await db
      .updateTable("hassStateOptions")
      .set(updateWith)
      .where("id", "=", id)
      .returningAll()
      .execute();
  }
  
  export async function deleteOptions(id: any) {
    return await db
      .deleteFrom("hassStateOptions")
      .where("id", "=", id)
      .returningAll()
      .executeTakeFirst();
  }
  