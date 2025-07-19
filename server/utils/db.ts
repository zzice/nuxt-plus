// @ts-ignore
import { createClient } from "@supabase/supabase-js";
import { serverSupabaseServiceRole } from "#supabase/server";
import { H3Event, EventHandlerRequest } from "h3";

/**
 * 获取 Supabase 客户端实例。
 * @returns Supabase 客户端实例。
 * @throws 如果 Supabase URL 或密钥未设置，则抛出错误。
 */
export function getSupabaseServiceClient() {
  const supabaseUrl = process.env.SUPABASE_URL || "";
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase URL or key is not set");
  }
  const client = createClient(supabaseUrl, supabaseKey);
  return client;
}

/**
 * 获取 Supabase Service Role 客户端实例。
 * @param event H3 事件对象。
 * @returns Supabase Service Role 客户端实例。
 */
export function getSupabaseServiceRoleClient(
  event: H3Event<EventHandlerRequest>
) {
  return serverSupabaseServiceRole(event);
}
