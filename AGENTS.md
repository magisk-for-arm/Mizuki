# 🌸 Mizuki Agent Guide

This document provides essential information for agentic coding assistants (like yourself) to effectively operate in the Mizuki repository.


##. important 使用中文交互

## 核心原则 (Core Principles)- **KISS 原则**: 坚持简洁与可维护性。代码只需满足当前需求，严禁过度工程化 (Over-engineering) 和不必要的防御性设计。


### **第一性原理**: 遇到问题深入剖析根源，而非通过“打补丁”解决表象。善用现有工具库，不重复造轮子。- **事实导向**: 如果我的思路或现有代码有误，请直接指出并纠正，不需要客套。
### 2. 开发工作流 (Workflow)必须严格遵守以下 **Step-by-Step** 流程，不可跳步：

  1. **需求分析 (Analyze)**: 明确需求，通过多轮对话厘清所有疑点。
  2. **等待审核 (Review)**: **（关键）** 只有在我确认/批准方案后，才能进入下一步。
  3.  **任务拆解 (Breakdown)**: 将方案拆解为具体的 Task List。
  4. **代码实现 (Implement)**: 执行编码。


## 3. 技术偏好 (Tech Preferences)- **自动化重启**: 在提供代码修改建议时，必须确保包含“修改后自动重启应用”的相关逻辑或提示（针对开发环境配置）。## 4. 输出规范 (Output Format)- 

**语言**: 思考过程 (Chain of Thought)、回复内容、任务清单 **必须使用中文**。- **结构**: 针对复杂任务，回复必须包含以下三个板块：1. `## 思考与分析` (Thought)2. `## 实施计划` (Implementation Plan)3. `## 任务清单` (Task List)## 5. 固定指令当收到 "Implementation Plan, Task List and Thought in chinese" 指令时，请严格按照上述结构执行。

| Task | Command | Description |
| :--- | :--- | :--- |
| **Development** | `pnpm dev` | Starts the Astro development server at `localhost:4321`. |
| **Build** | `pnpm build` | Builds the production site. Also updates Bangumi data and compresses fonts. |
| **Preview** | `pnpm preview` | Previews the production build locally. |
| **Type Check** | `pnpm type-check` | Runs TypeScript compiler check without emitting files. |
| **Astro Check** | `pnpm check` | Runs Astro-specific diagnostics and type checking. |
| **Lint** | `pnpm lint` | Runs ESLint and fixes issues in `src/`. |
| **Format** | `pnpm format` | Formats all files in `src/` using Prettier. |
| **New Post** | `pnpm new-post <name>` | Utility script to scaffold a new blog post. |
| **Test Fonts** | `pnpm test-font-compression` | Specialized test for font optimization. |

*Note: Use `pnpm` exclusively. Other package managers are restricted.*

## 🛠 Tech Stack

- **Framework**: Astro 5.x (Static site generation)
- **UI Components**: Svelte 5.x & Astro Components
- **Styling**: Tailwind CSS & PostCSS
- **Search**: Pagefind (Post-build only)
- **State Management**: Svelte runes/stores for client-side state
- **Animations**: Swup (Page transitions)

## 🎨 Code Style & Conventions

### 1. File Naming
- **Components**: `PascalCase` (e.g., `PostCard.astro`, `Search.svelte`).
- **Utilities/Scripts**: `kebab-case` (e.g., `content-utils.ts`, `sync-content.js`).
- **Styles**: `main.css`, `main.styl`.

### 2. Formatting (Prettier)
- **Indentation**: Use **Tabs** (set to 4 spaces).
- **Strings**: Use **Double Quotes** (`"`).
- **Semicolons**: Required.
- **Trailing Commas**: `"all"`.
- **End of Line**: `crlf` (Strictly enforced via `.prettierrc.js`).
- **Print Width**: 80 characters.

### 3. TypeScript Guidelines
- **Strictness**: `strictNullChecks` is enabled. Always aim for type safety.
- **Interfaces**: Preferred for component `Props`.
- **Types**: Used for configuration objects, union types, and complex mappings.
- **Path Aliases**:
    - `@/*` -> `src/*`
    - `@components/*` -> `src/components/*`
    - `@utils/*` -> `src/utils/*`
    - `@i18n/*` -> `src/i18n/*`
    - `@layouts/*` -> `src/layouts/*`
    - `@assets/*` -> `src/assets/*`
    - `@constants/*` -> `src/constants/*`

### 4. Import Ordering
1. Framework/Core (e.g., `astro:content`, `svelte`)
2. Third-party libraries
3. Internal modules using path aliases
4. Relative imports (avoid if alias is available)

### 5. Component Patterns
- **Astro Components**:
    - Define `interface Props` in the frontmatter.
    - Handle data fetching and logic inside the `---` block.
    - Use `class:list` for conditional classes.
    - Use `define:vars` for passing JS variables to scoped CSS.
- **Svelte Components**:
    - Use `<script lang="ts">`.
    - Supports Svelte 5 runes (`$state`, `$derived`, etc.) and Svelte 4 reactive syntax (`$:`).
    - Use `@iconify/svelte` for icons.

## ⚙️ Configuration System

The site is highly configuration-driven. **`src/config.ts`** is the central hub.
- **Circular Dependencies**: Do NOT import i18n modules in `src/config.ts`. This causes build failures.
- **Feature Flags**: Controlled via `featurePages` in `siteConfig`.
- **Sidebar Layout**: Managed via `sidebarLayoutConfig`, defining component order, position (`left`/`right`/`top`/`sticky`), and responsive behavior.
- **Theme Colors**: Defined in `themeColor` using hue values (0-360).
- **Banner Configuration**: Supports desktop/mobile images, carousel, and typewriter effects.

## 🌍 Internationalization (i18n)

- Use `i18n(I18nKey.someKey)` for localized strings.
- Keys are defined in `src/i18n/i18nKey.ts`.
- Translations are in `src/i18n/languages/`.
- Site language is set via `siteConfig.lang` in `src/config.ts`.

Example usage in Svelte:
```svelte
<script>
  import I18nKey from "@i18n/i18nKey";
  import { i18n } from "@i18n/translation";
</script>
<p>{i18n(I18nKey.home)}</p>
```

## 📝 Content Management

- Posts are stored in `src/content/posts/`.
- Frontmatter schema (defined in `src/content.config.ts`):
    - `title`: string (required)
    - `published`: date (required)
    - `description`: string (optional)
    - `image`: string (optional, relative path)
    - `tags`: string[] (optional)
    - `category`: string (optional)
    - `draft`: boolean (default: false)
    - `pinned`: boolean (default: false)
    - `priority`: number (optional, for sorting pinned posts)
    - `encrypted`: boolean (for password protection)
- **Callouts**: Supported in Markdown via `> [!NOTE]`, `> [!TIP]`, `> [!WARNING]`, etc.
- **Math**: KaTeX support via `$...$` and `$$...$$`.

## ⚠️ Important Gotchas

1. **Search**: `pagefind` only works in production builds (`pnpm build && pnpm preview`). In dev mode, search returns mock data defined in `Search.svelte`.
2. **SPA Transitions**: The site uses `Swup`. Scripts in Astro components might need to handle page transition events if they interact with the DOM.
3. **Fonts**: Font compression and subsetting only happen during production build. ASCII and CJK fonts are handled separately.
4. **CSS**: Uses Tailwind CSS with nesting enabled. Custom classes like `.card-base`, `.btn-plain`, and `.text-90` are defined in `src/styles/main.css`.
5. **Images**: Use `ImageWrapper.astro` for optimized image rendering.

## 🧪 Testing

- No general unit/integration test suite is currently configured.
- Use `pnpm check` and `pnpm type-check` to verify code integrity.
- Use `pnpm test-font-compression` to verify font optimization logic.

## 📁 Project Structure

- `src/assets/`: Static assets like images and fonts.
- `src/components/`: Reusable Astro and Svelte components.
- `src/content/`: Markdown content for posts and special pages.
- `src/i18n/`: Internationalization keys and translations.
- `src/layouts/`: Page layouts (BaseLayout, MainLayout, etc.).
- `src/plugins/`: Custom Remark/Rehype plugins for Markdown processing.
- `src/styles/`: Global styles and Tailwind configuration.
- `src/utils/`: Helper functions and business logic.
- `scripts/`: Maintenance and build-related scripts.

## 🔄 Bangumi 数据获取架构

此为 **构建时脚本 + 运行时 JSON 缓存** 模式，用于 Anime / Game 等收藏展示页面。

### 工作流程

```
pnpm build
  → scripts/update-bangumi.mjs 运行
    → 读取 src/config.ts 中的 bangumi.userId / anime.mode / game.mode
    → 调用 Bangumi API v0
    → 输出 JSON 到 src/data/bangumi-data.json (动画) / bangumi-game-data.json (游戏)
  → 运行时 src/utils/anime-data.ts / game-data.ts 读取 JSON 并映射为类型化数据
  → 页面组件 (anime.astro / game.astro) 渲染
```

### Bangumi API 端点

| 类型 | subject_type | 输出文件 |
|------|-------------|---------|
| 动画 (Anime) | `2` | `src/data/bangumi-data.json` |
| 游戏 (Game) | `4` | `src/data/bangumi-game-data.json` |

### 收藏状态映射

| Bangumi type | Anime 状态 | Game 状态 |
|:---|:---|:---|
| `3` | `watching` | **`playing`** (自动映射) |
| `1` | `planned` | `planned` |
| `2` | `completed` | `completed` |
| `4` | `onhold` | `onhold` |
| `5` | `dropped` | `dropped` |

## 🎮 Game 页面数据映射

`bangumi-game-data.json` 的字段通过 `game-data.ts` 映射为 `GameItem` 类型：

| JSON 字段 | GameItem 字段 | 说明 |
|-----------|-------------|------|
| `studio` | `developer` | 开发商 |
| `genre` | `tags` | 标签数组 |
| `startDate` | `releaseDate` | 发布日期 |

## 🎨 特效配置

所有特效在 `src/config.ts` 中集中控制：

- **樱花特效**: `sakuraConfig.enable` (true/false)
- **看板娘**: `pioConfig.enable` (true/false)
- **全屏壁纸**: `fullscreenWallpaperConfig`

## 🏗️ 数据模式架构

每个收藏展示页遵循统一的数据源切换模式：

1. `src/utils/*-data.ts` 定义 `SourceConfig` 类型（支持 `local` / `json` 等模式）
2. 页面通过 `siteConfig.{page}.mode` 读取当前模式
3. 构建脚本只在该页面模式为 `"bangumi"` 时才抓取数据
4. 无需新增页面数据类型时，只需复用现有模式即可
