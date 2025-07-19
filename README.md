# NuxtPlus

NuxtPlus 是一个基于 Nuxt 3 构建的现代化 Web 应用模板，集成了最佳实践和强大的组件库，旨在帮助开发者快速启动和扩展项目。

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ 功能特性

- **现代化技术栈**: 基于 Nuxt 3, Vue 3, Vite, 和 Tailwind CSS。
- **UI 组件库**: 集成 [Shadcn-Vue](https://www.shadcn-vue.com/)，提供丰富、可定制的 UI 组件。
- **用户认证**: 通过 `@nuxtjs/supabase` 实现开箱即用的 Supabase 用户认证。
- **国际化 (i18n)**: 使用 `@nuxtjs/i18n` 实现多语言支持。
- **状态管理**: 使用 Pinia 进行全局状态管理。
- **内容管理**: 通过 `@nuxt/content` 实现 Markdown 内容管理，支持博客等功能。
- **SEO 优化**: 集成 `@nuxtjs/sitemap` 和 `@nuxtjs/robots`，提供强大的 SEO 功能。
- **明暗模式**: 支持主题切换。
- **代码规范**: 集成 ESLint，保证代码质量。

## 🚀 快速上手

### 1. 环境准备

- [Node.js](https://nodejs.org/) (v18.x 或更高版本)
- [pnpm](https://pnpm.io/)

### 2. 项目克隆与依赖安装

```bash
git clone https://github.com/zzice/nuxt-plus.git
cd nuxt-plus
pnpm install
```

### 3. 环境变量配置

复制 `.env.example` 文件并重命名为 `.env.development`，然后根据您的需求配置环境变量，特别是 Supabase 相关的 Key。

```bash
cp .env.example .env.development
```

### 4. 启动开发服务器

```bash
pnpm dev
```

现在，您可以在浏览器中访问 `http://localhost:3000` 查看项目。

## 📦 技术栈

- **框架**: [Nuxt 3](https://nuxt.com/)
- **UI 框架**: [Vue 3](https://vuejs.org/)
- **UI 组件库**: [Shadcn-Vue](https://www.shadcn-vue.com/)
- **CSS 框架**: [Tailwind CSS](https://tailwindcss.com/)
- **状态管理**: [Pinia](https://pinia.vuejs.org/)
- **认证/数据库**: [Supabase](https://supabase.io/)
- **国际化**: [Nuxt I18n](https://i18n.nuxtjs.org/)
- **内容管理**: [Nuxt Content](https://content.nuxt.com/)
- **图标**: [Lucide Vue Next](https://lucide.dev/)
- **代码规范**: [ESLint](https://eslint.org/)

## 🤝 贡献指南

我们欢迎任何形式的贡献！如果您有任何建议或问题，请随时提交 [Issues](https://github.com/zzice/nuxt-plus/issues) 或 [Pull Requests](https://github.com/zzice/nuxt-plus/pulls)。

## 📄 开源协议

该项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源。
