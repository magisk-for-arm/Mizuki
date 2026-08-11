import type {
	AnnouncementConfig,
	CommentConfig,
	ExpressiveCodeConfig,
	FooterConfig,
	FullscreenWallpaperConfig,
	LicenseConfig,
	MusicPlayerConfig,
	NavBarConfig,
	PermalinkConfig,
	PioConfig,
	ProfileConfig,
	RandomPostsConfig,
	RelatedPostsConfig,
	SakuraConfig,
	ShareConfig,
	SidebarLayoutConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

// ══════════════════════════════════════════════════════════════
// 站点语言
// ══════════════════════════════════════════════════════════════

const SITE_LANG = "zh_CN";
export { SITE_LANG };

// ══════════════════════════════════════════════════════════════
// 站点核心配置 (SiteConfig)
// ══════════════════════════════════════════════════════════════

export const siteConfig: SiteConfig = {
	title: "armの小破站",
	subtitle: "armの小破站",
	siteURL: "https://vc.520403.xyz/",
	siteStartDate: "2025-07-30",

	lang: SITE_LANG,

	themeColor: {
		hue: 230,
		fixed: false,
	},

	featurePages: {
		anime: true,
		diary: false,
		friends: true,
		projects: false,
		skills: false,
		timeline: false,
		albums: false,
		devices: false,
		aiTools: false,
		game: true,
	},

	navbarTitle: {
		mode: "logo",
		text: "Blog",
		icon: "assets/home/fix.png",
		logo: "assets/home/fix.png",
	},

	pageScaling: {
		enable: true,
		targetWidth: 2000,
	},

	bangumi: {
		userId: "1158041",
		fetchOnDev: false,
	},

	bilibili: {
		vmid: "your-bilibili-vmid",
		fetchOnDev: false,
		coverMirror: "",
		useWebp: true,
	},

	anime: {
		mode: "bangumi",
	},

	game: {
		mode: "bangumi",
	},

	diaryApiUrl: "",

	postListLayout: {
		defaultMode: "list",
		enable: true,
		allowSwitch: true,
		categoryBar: {
			enable: true,
		},
	},

	tagStyle: {
		useNewStyle: true,
	},

	wallpaperMode: {
		defaultMode: "banner",
		showModeSwitchOnMobile: "both",
	},

	banner: {
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
			interval: 1.5,
		},

		waves: {
			enable: true,
			performanceMode: false,
			mobileDisable: false,
		},

		imageApi: {
			enable: false,
			url: "https://ybapi.cn/API/pixiv.php?type=text",
		},

		homeText: {
			enable: true,
			title: "armの博客",

			subtitle: [
				"人が想像できることは、必ず人が実現できる",
				"人を信じよ、しかしその百倍も自らを信じよ",
				"一日は貴い一生である。これを空費してはならない",
				"青春は永遠に、はじめからのやり直しだ",
				"君ってさ、知らないうちに我的毎日になってたよ",
				"君と話すと、なんか毎日がちょっと楽しくなるんだ",
				"今日はなんでもない日。でも、ちょっとだけいい日",
			],
			typewriter: {
	enable: false,
				speed: 100,
				deleteSpeed: 50,
				pauseTime: 2300,
			},
		},

		credit: {
			enable: false,
			text: "Describe",
			url: "",
		},

		navbar: {
			transparentMode: "semifull",
		},
	},

	toc: {
		enable: true,
		mobileTop: true,
		desktopSidebar: true,
		floating: true,
		depth: 2,
		useJapaneseBadge: true,
	},

	showCoverInContent: true,
	generateOgImages: false,

	favicon: [
		{
			src: "/favicon/icon.png",
			theme: "dark",
		},
	],

	showLastModified: true,

	pageProgressBar: {
		enable: true,
		height: 3,
		duration: 6000,
	},

	thirdPartyAnalytics: {
		enable: false,
		clarityId: "",
	},

	card: {
		border: true,
		followTheme: false,
	},

	imageOptimization: {
		formats: "webp",
		quality: 85,
		noReferrerDomains: [
			"*.hdslb.com",
		],
	},
};

// ══════════════════════════════════════════════════════════════
// 全屏壁纸配置 (FullscreenWallpaperConfig)
// ══════════════════════════════════════════════════════════════

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
		opacity: 0.8,
		blur: 1.5,
		cardOpacity: 0.8,
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

// ══════════════════════════════════════════════════════════════
// 导航栏配置 (NavBarConfig)
// ══════════════════════════════════════════════════════════════

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		{
			name: "链接",
			url: "/links/",
			icon: "material-symbols:link",
			children: [
				{
					name: "GitHub",
					url: "https://github.com/magisk-for-arm",
					external: true,
					icon: "fa7-brands:github",
				},
				{
					name: "Bilibili",
					url: "https://space.bilibili.com/1661848169",
					external: true,
					icon: "fa7-brands:bilibili",
				},
			],
		},
		{
			name: "我的",
			url: "/content/",
			icon: "material-symbols:person",
			children: [
				{
					name: "番剧",
					url: "/anime/",
					icon: "material-symbols:movie",
				},
				{
					name: "游戏",
					url: "/game/",
					icon: "material-symbols:videogame-asset",
				},
			],
		},
		{
			name: "关于",
			url: "/content/",
			icon: "material-symbols:info",
			children: [
				{
					name: "关于",
					url: "/about/",
					icon: "material-symbols:person",
				},
				{
					name: "友链",
					url: "/friends/",
					icon: "material-symbols:group",
				},
			],
		},
	],
};

// ══════════════════════════════════════════════════════════════
// 个人资料配置 (ProfileConfig)
// ══════════════════════════════════════════════════════════════

export const profileConfig: ProfileConfig = {
	avatar: "/assets/home/fix.png",
	name: "arm",
	bio: "愛する人が皆愛を得ますように",
	typewriter: {
		enable: true,
		speed: 80,
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

// ══════════════════════════════════════════════════════════════
// 文章许可协议配置 (LicenseConfig)
// ══════════════════════════════════════════════════════════════

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

// ══════════════════════════════════════════════════════════════
// 固定链接配置 (PermalinkConfig)
// ══════════════════════════════════════════════════════════════

export const permalinkConfig: PermalinkConfig = {
	enable: false,
	format: "%postname%",
};

// ══════════════════════════════════════════════════════════════
// 代码块样式配置 (ExpressiveCodeConfig)
// ══════════════════════════════════════════════════════════════

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
	hideDuringThemeTransition: true,
};

// ══════════════════════════════════════════════════════════════
// 评论系统配置 (CommentConfig)
// ══════════════════════════════════════════════════════════════

export const commentConfig: CommentConfig = {
	enable: true,
	system: "twikoo",
	twikoo: {
		envId: "https://twkoo.520403.xyz",
		lang: SITE_LANG,
	},
	giscus: {
		repo: "your-github-username/your-repo-name",
		repoId: "your-repo-id",
		category: "Announcements",
		categoryId: "your-category-id",
		mapping: "pathname",
		strict: "0",
		reactionsEnabled: "1",
		emitMetadata: "0",
		inputPosition: "top",
		theme: "preferred_color_scheme",
		lang: SITE_LANG,
		loading: "lazy",
	},
};

// ══════════════════════════════════════════════════════════════
// 分享功能配置 (ShareConfig)
// ══════════════════════════════════════════════════════════════

export const shareConfig: ShareConfig = {
	enable: true,
};

// ══════════════════════════════════════════════════════════════
// 公告栏配置 (AnnouncementConfig)
// ══════════════════════════════════════════════════════════════

export const announcementConfig: AnnouncementConfig = {
	title: "公告",
	content: "Welcome to my blog! 这是我的博客.",
	closable: true,
	link: {
		enable: true,
		text: "Learn More",
		url: "/about/",
		external: false,
	},
};

// ══════════════════════════════════════════════════════════════
// 音乐播放器配置 (MusicPlayerConfig)
// ══════════════════════════════════════════════════════════════

export const musicPlayerConfig: MusicPlayerConfig = {
	enable: false,
	showFloatingPlayer: true,
	floatingEntryMode: "fab",
	mode: "meting",
	meting_api:
		"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r",
	id: "14164869977",
	server: "netease",
	type: "playlist",
};

// ══════════════════════════════════════════════════════════════
// 页脚配置 (FooterConfig)
// ══════════════════════════════════════════════════════════════

export const footerConfig: FooterConfig = {
	enable: false,
	customHtml: "",
};

// ══════════════════════════════════════════════════════════════
// 侧边栏布局配置 (SidebarLayoutConfig)
// ══════════════════════════════════════════════════════════════

export const sidebarLayoutConfig: SidebarLayoutConfig = {
	properties: [
		{
			type: "profile",
			position: "top",
			class: "onload-animation",
			animationDelay: 0,
		},
		{
			type: "announcement",
			position: "top",
			class: "onload-animation",
			animationDelay: 50,
		},
		{
			type: "music-sidebar",
			position: "sticky",
			class: "onload-animation",
			animationDelay: 100,
		},
		{
			type: "categories",
			position: "sticky",
			class: "onload-animation",
			animationDelay: 150,
			responsive: {
				collapseThreshold: 5,
			},
		},
		{
			type: "tags",
			position: "top",
			class: "onload-animation",
			animationDelay: 250,
			responsive: {
				collapseThreshold: 20,
			},
		},
		{
			type: "card-toc",
			position: "sticky",
			class: "onload-animation",
			animationDelay: 200,
		},
		{
			type: "site-stats",
			position: "top",
			class: "onload-animation",
			animationDelay: 200,
		},
		{
			type: "calendar",
			position: "top",
			class: "onload-animation",
			animationDelay: 250,
		},
	],
	components: {
		left: ["profile", "announcement", "tags", "card-toc"],
		right: ["site-stats", "calendar", "categories", "music-sidebar"],
		drawer: ["profile", "announcement", "music-sidebar", "categories", "tags"],
	},
	defaultAnimation: {
		enable: true,
		baseDelay: 0,
		increment: 50,
	},
	responsive: {
		breakpoints: {
			mobile: 768,
			tablet: 1280,
			desktop: 1280,
		},
	},
};

// ══════════════════════════════════════════════════════════════
// 樱花特效配置 (SakuraConfig)
// ══════════════════════════════════════════════════════════════

export const sakuraConfig: SakuraConfig = {
	enable: false,
	sakuraNum: 10,
	limitTimes: 2,
	size: {
		min: 0.5,
		max: 1.1,
	},
	opacity: {
		min: 0.3,
		max: 0.9,
	},
	speed: {
		horizontal: {
			min: -1.7,
			max: -1.2,
		},
		vertical: {
			min: 1.5,
			max: 2.2,
		},
		rotation: 0.03,
		fadeSpeed: 0.03,
	},
	zIndex: 100,
};

// ══════════════════════════════════════════════════════════════
// Pio 看板娘配置 (PioConfig)
// ══════════════════════════════════════════════════════════════

export const pioConfig: PioConfig = {
	enable: false,
	models: ["/pio/models/NOIR/noir.model3.json"],
	position: "left",
	width: 280,
	height: 250,
	mode: "draggable",
	hiddenOnMobile: true,
	hideAboutMenu: false,
	dialog: {
		welcome: "欢迎来到 Mizuki 网站！",
		touch: [
			"你在干什么？",
			"再摸我就报警了！",
			"HENTAI!",
			"不可以这样欺负我啦！",
		],
		home: "点击这里回到首页！",
		skin: ["想看看我的新衣服吗？", "新衣服真漂亮~"],
		close: "QWQ 下次再见吧~",
		link: "https://github.com/magisk-for-arm",
	},
};

// ══════════════════════════════════════════════════════════════
// 随机文章配置 (RandomPostsConfig)
// ══════════════════════════════════════════════════════════════

export const randomPostsConfig: RandomPostsConfig = {
	enable: true,
	maxCount: 5,
};

// ══════════════════════════════════════════════════════════════
// 相关文章配置 (RelatedPostsConfig)
// ══════════════════════════════════════════════════════════════

export const relatedPostsConfig: RelatedPostsConfig = {
	enable: true,
	maxCount: 5,
	weights: {
		tagSimilarity: 1.0,
		titleSimilarity: 0.6,
		descriptionSimilarity: 0.4,
		categoryMatch: 0.3,
		freshness: 0.2,
		tagIDF: true,
	},
	freshnessHalfLife: 180,
};

// ══════════════════════════════════════════════════════════════
// Widget 配置聚合对象
// ══════════════════════════════════════════════════════════════

export const widgetConfigs: {
	profile: ProfileConfig;
	announcement: AnnouncementConfig;
	music: MusicPlayerConfig;
	layout: SidebarLayoutConfig;
	sakura: SakuraConfig;
	fullscreenWallpaper: FullscreenWallpaperConfig;
	pio: PioConfig;
	share: ShareConfig;
	relatedPosts: RelatedPostsConfig;
	randomPosts: RandomPostsConfig;
} = {
	profile: profileConfig,
	announcement: announcementConfig,
	music: musicPlayerConfig,
	layout: sidebarLayoutConfig,
	sakura: sakuraConfig,
	fullscreenWallpaper: fullscreenWallpaperConfig,
	pio: pioConfig,
	share: shareConfig,
	relatedPosts: relatedPostsConfig,
	randomPosts: randomPostsConfig,
};

// ══════════════════════════════════════════════════════════════
// 字体配置（仅供 compress-fonts 脚本提取子集优化配置）
// 注意：运行时字体由 astro.config.mjs 的 Astro Font API 管理
// ══════════════════════════════════════════════════════════════

export const fontConfig = {
	font: {
		// 注意：自定义字体需要在 src/styles/main.css 中引入字体文件
		// 注意：字体子集优化功能目前仅支持 TTF 格式字体,开启后需要在生产环境才能看到效果,在Dev环境下显示的是浏览器默认字体!
		asciiFont: {
			// 英文字体 - 优先级最高
			fontFamily: "Misans",
			fontWeight: "400",
			localFonts: ["MiSans-Normal.ttf"],
			enableCompress: true, // 启用字体子集优化，减少字体文件大小
		},
		cjkFont: {
			// 中日韩字体 - 作为回退字体
			fontFamily: "Misans",
			fontWeight: "400",
			localFonts: ["MiSans-Normal.ttf"],
			enableCompress: true, // 启用字体子集优化，减少字体文件大小
		},
	},
};
