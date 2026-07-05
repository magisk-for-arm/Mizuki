import type { FullscreenWallpaperConfig } from "../types/config";

export const fullscreenWallpaperConfig: FullscreenWallpaperConfig = {
	enable: true,
	src: {
		desktop: [
			"/assets/desktop-banner/w1.webp",
			"/assets/desktop-banner/w2.webp",
			"/assets/desktop-banner/w3.webp",
			"/assets/desktop-banner/w4.webp",
			"/assets/desktop-banner/w5.webp",
			"/assets/desktop-banner/w6.webp",
			"/assets/desktop-banner/w7.webp",
			"/assets/desktop-banner/w8.webb",
			"/assets/desktop-banner/w9.webp",
			"/assets/desktop-banner/w10.webp",
		],
		mobile: [
			"/assets/mobile-banner/m1.webp",
			"/assets/mobile-banner/m2.webp",
			"/assets/mobile-banner/m3.webp",
			"/assets/mobile-banner/m4.webp",
			"/assets/mobile-banner/m5.webp",
			"/assets/mobile-banner/m6.webp",
			"/assets/mobile-banner/m7.webp",
			"/assets/mobile-banner/m8.webp",
			"/assets/mobile-banner/m9.webp",
			"/assets/mobile-banner/m10.webp",
		],
	},
	position: "center",
	carousel: {
		enable: true,
		interval: 5,
	},
	zIndex: -1,
	opacity: 0.8,
	blur: 3,
	switchable: true,
	overlay: {
		opacity: 0.8, // 壁纸不透明度，0-1
		blur: 1.5, // 背景模糊半径（px）
		cardOpacity: 0.8, // 卡片不透明度，0-1
		switchable: {
			opacity: true,
			blur: true,
			cardOpacity: true,
		},
	},
	fullscreen: {
		switchable: {
			opacity: true,
			blur: true,
		},
	},
};
