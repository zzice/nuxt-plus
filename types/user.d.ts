export interface UserProvider {
  email: string;
}
/**
 * 用户信息类型定义
 */
export interface User {
  id: string; // Supabase 用户 ID 通常是 UUID (string)
  created_at?: string; // ISO 8601 格式的日期字符串
  email: string;
  name?: string | null; // 姓名可能为空
  password?: string; // 密码通常不直接存储或返回，但定义以备不时之需
  avatar?: string | null; // 头像 URL 可能为空
}

/**
 * 第三方账户信息类型定义
 */
export interface Account {
  id: string; // 账户记录的 ID
  created_at?: string; // ISO 8601 格式的日期字符串
  user_id: string; // 关联的用户 ID (User.id)
  type: string; // 账户类型，例如 'oauth', 'email'
  provider: string; // 提供商名称，例如 'github', 'google'
  provider_account_id: string; // 提供商侧的用户唯一标识
}
