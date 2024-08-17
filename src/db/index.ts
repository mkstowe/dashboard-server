import { Kysely, PostgresDialect } from "kysely";
import pg from "pg";
import Database from "./schema/Database";
const { Pool } = pg;

export const db = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString: process.env.DATABASE_URL,
    }),
  }),
});

