// import { serverSupabaseClient } from "#supabase/server";
import { serverSupabaseServiceRole } from "#supabase/server";
import { findUserById } from "~/services/user";
import { getSupabaseServiceClient as getSupabaseClient } from "~/server/utils/db";

export default defineEventHandler(async (event) => {
  // const { data, error } = await findUserById(event, "1");

  // console.log(data);
  return "Hello Nitro";
});
