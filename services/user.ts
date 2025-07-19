import { serverSupabaseServiceRole } from "#supabase/server";
import { getSupabaseServiceClient } from "~/server/utils/db";
import type { H3Event, EventHandlerRequest } from "h3";
import type { User, Account, UserProvider } from "~/types/user.d";

/**
 * 根据用户ID查找用户
 * @param event H3事件对象
 * @param id 用户ID
 * @returns 用户信息或null
 */
export async function findUserById(id: string): Promise<User | null> {
  const { data, error } = await getSupabaseServiceClient()
    .from("users")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.error("Error finding user by id:", error);
    return null;
  }
  return data as User | null;
}

/**
 * 根据邮箱查找用户
 * @param event H3事件对象
 * @param email 邮箱地址
 * @returns 用户信息或null
 */
export async function findUserByEmail(email: string): Promise<User | null> {
  const { data, error } = await getSupabaseServiceClient()
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (error) {
    console.error("Error finding user by email:", error);
    return null;
  }
  return data as User | null;
}

/**
 * 根据提供商和提供商账户ID查找账户信息
 * @param event H3事件对象
 * @param provider 提供商名称
 * @param providerAccountId 提供商账户ID
 * @returns 账户信息或null
 */
export async function findAccount(
  provider: string,
  providerAccountId: string
): Promise<Account | null> {
  const { data, error } = await getSupabaseServiceClient()
    .from("accounts")
    .select("*")
    .eq("provider", provider)
    .eq("provider_account_id", providerAccountId)
    .single();

  if (error) {
    console.error("Error finding account:", error);
    return null;
  }
  return data as Account | null;
}

export async function upsertUserOAuth(userProvider: UserProvider) {
  const user = findUserByEmail(userProvider.email);
  if (!user) {
    // 创建用户
  }
}
