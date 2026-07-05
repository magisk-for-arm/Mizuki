import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
	avatar: "/assets/home/fix.png", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
	name: "arm",
	bio: "愛する人が皆愛を得ますように",
	typewriter: {
		enable: true, // 启用个人简介打字机效果
		speed: 80, // 打字速度（毫秒）
	},
	links: [
		{
			name: "Bilibli",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/1661848169",
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/magisk-for-arm",
		},
	],
};
