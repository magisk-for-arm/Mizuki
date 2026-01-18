# 🌸 Mizuki Agent Guide

This document provides essential information for agentic coding assistants (like yourself) to effectively operate in the Mizuki repository.

## 🚀 Commands

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
