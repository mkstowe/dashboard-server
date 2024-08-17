import { db } from "../db";

export async function getOptions() {
  return await db.selectFrom("dropdownOptions").selectAll().execute();
}

export async function getOptionsByGroup(group: string) {
  // return await db
    // .selectFrom("dropdownOptions")
    // .selectAll()
    // .where("group", "=", group)
    // .execute();
}
