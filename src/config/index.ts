/**
 * 配置统一导出入口
 *
 * 所有配置现已集中到 src/config.ts 单文件中。
 * 此文件仅作为 barrel，将导出转发至 src/config.ts。
 *
 * 使用方法：
 *   import { siteConfig, profileConfig } from "@/config";
 *   或
 *   import { siteConfig } from "../config";
 *
 * 统一配置入口：src/config.ts
 */

export {
	announcementConfig,
	commentConfig,
	expressiveCodeConfig,
	footerConfig,
	fullscreenWallpaperConfig,
	licenseConfig,
	musicPlayerConfig,
	navBarConfig,
	permalinkConfig,
	pioConfig,
	profileConfig,
	randomPostsConfig,
	relatedPostsConfig,
	SITE_LANG,
	sakuraConfig,
	shareConfig,
	sidebarLayoutConfig,
	siteConfig,
	widgetConfigs,
} from "../config";
