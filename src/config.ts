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
	ProfileConfig,
	SakuraConfig,
	ShareConfig,
	SidebarLayoutConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

// 移除i18n导入以避免循环依赖

// 定义站点语言
const SITE_LANG = "zh_CN"; // 语言代码，例如：'en', 'zh_CN', 'ja' 等。
const SITE_TIMEZONE = 8; //设置你的网站时区 from -12 to 12 default in UTC+8
export const siteConfig: SiteConfig = {
	title: "armの小破站",
	subtitle: "armの小破站",
	siteURL: "https://vc.520403.xyz/", // 请替换为你的站点URL，以斜杠结尾
	siteStartDate: "2025-07-30", // 站点开始运行日期，用于站点统计组件计算运行天数

	timeZone: SITE_TIMEZONE,

	lang: SITE_LANG,

	themeColor: {
		hue: 230, // 主题色的默认色相，范围从 0 到 360。例如：红色：0，青色：200，蓝绿色：250，粉色：345
		fixed: false, // 对访问者隐藏主题色选择器
	},

	// 特色页面开关配置(关闭不在使用的页面有助于提升SEO,关闭后直接在顶部导航删除对应的页面就行)
	featurePages: {
		anime: true, // 番剧页面开关
		diary: true, // 日记页面开关
		friends: true, // 友链页面开关
		projects: true, // 项目页面开关
		skills: false, // 技能页面开关
		timeline: false, // 时间线页面开关
		albums: false, // 相册页面开关
		devices: false, // 设备页面开关
		galgame: true, // galgame页面开关
	},

	// 顶栏标题配置
	navbarTitle: {
		// 显示模式："text-icon" 显示图标+文本，"logo" 仅显示Logo
		mode: "logo",
		// 顶栏标题文本
		text: "Blog",
		// 顶栏标题图标路径，默认使用 public/assets/home/home.png
		icon: "assets/home/fix.webp",
		// 网站Logo图片路径
		logo: "assets/home/fix.webp",
	},

	bangumi: {
		userId: "1158041", // 在此处设置你的Bangumi用户ID，可以设置为 "sai" 测试
		fetchOnDev: false, // 是否在开发环境下获取 Bangumi 数据（默认 false），获取前先执行 pnpm build 构建 json 文件
	},

	bilibili: {
		vmid: "your-bilibili-vmid", // 在此处设置你的Bilibili用户ID (uid)
		fetchOnDev: false, // 是否在开发环境下获取 Bilibili 数据（默认 false）
		coverMirror: "", // 封面图片镜像源（可选）
		useWebp: true, // 是否使用WebP格式（默认 true）
	},

	anime: {
		mode: "bangumi", // 番剧页面模式："bangumi" 使用Bangumi API，"local" 使用本地配置，"bilibili" 使用Bilibili API
	},

	galgame: {
		mode: "bangumi", // galgame页面模式："bangumi" 使用Bangumi API，"local" 使用本地配置
	},

	// 文章列表布局配置
	postListLayout: {
		// 默认布局模式："list" 列表模式（单列布局），"grid" 网格模式（双列布局）
		defaultMode: "list",
		// 是否允许用户切换布局
		allowSwitch: true,
	},

	// 标签样式配置
	tagStyle: {
		// 是否使用新样式（悬停高亮样式）还是旧样式（外框常亮样式）
		useNewStyle: true,
	},

	// 壁纸模式配置
	wallpaperMode: {
		// 默认壁纸模式：banner=顶部横幅，fullscreen=全屏壁纸，none=无壁纸
		defaultMode: "banner",
		// 整体布局方案切换按钮显示设置（默认："desktop"）
		showModeSwitchOnMobile: "both",
	},

	// 页面自动缩放配置 (Added from upstream)
	pageScaling: {
		enable: true, // 是否开启自动缩放
		targetWidth: 2000, // 目标宽度，低于此宽度时开始缩放
	},

	banner: {
		// 支持单张图片或图片数组，当数组长度 > 1 时自动启用轮播
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
			], // 桌面横幅图片
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
			], // 移动横幅图片
		}, // 使用本地横幅图片

		position: "center", // 等同于 object-position，仅支持 'top', 'center', 'bottom'。默认为 'center'

		carousel: {
			enable: true, // 为 true 时：为多张图片启用轮播。为 false 时：从数组中随机显示一张图片

			interval: 1.5, // 轮播间隔时间（秒）
		},

		waves: {
			enable: true, // 是否启用水波纹效果(这个功能比较吃性能)
			performanceMode: false, // 性能模式：减少动画复杂度(性能提升40%)
			mobileDisable: false, // 移动端禁用
		},

		// PicFlow API支持(智能图片API)
		imageApi: {
			enable: false, // 启用图片API
			url: "https://ybapi.cn/API/pixiv.php?type=text", // API地址，返回每行一个图片链接的文本
		},

		homeText: {
			enable: true, // 在主页显示自定义文本
			title: "armの博客", // 主页横幅主标题

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
				enable: true, // 启用副标题打字机效果

				speed: 100, // 打字速度（毫秒）
				deleteSpeed: 50, // 删除速度（毫秒）
				pauseTime: 2300, // 完全显示后的暂停时间（毫秒）
			},
		},

		credit: {
			enable: false, // 显示横幅图片来源文本

			text: "Describe", // 要显示的来源文本
			url: "", // （可选）原始艺术品或艺术家页面的 URL 链接
		},

		navbar: {
			transparentMode: "semi", // 导航栏透明模式："semi" 半透明加圆角，"full" 完全透明，"semifull" 动态透明
		},
	},
	toc: {
		enable: true, // 启用目录功能
		mode: "sidebar", // 目录显示模式："float" 悬浮按钮模式，"sidebar" 侧边栏模式
		depth: 2, // 目录深度，1-6，1 表示只显示 h1 标题，2 表示显示 h1 和 h2 标题，依此类推
		useJapaneseBadge: true, // 使用日语假名标记（あいうえお...）代替数字，开启后会将 1、2、3... 改为 あ、い、う...
	},
	showCoverInContent: true, // 在文章内容页显示文章封面
	generateOgImages: false, // 启用生成OpenGraph图片功能
	favicon: [
		{
			src: "/favicon/icon.png",
			theme: "dark",
		},
	],

	// 字体配置
	font: {
		asciiFont: {
			fontFamily: "Misans",
			fontWeight: "400",
			localFonts: ["MiSans-Normal.ttf"],
			enableCompress: true, // 启用字体子集优化
		},
		cjkFont: {
			fontFamily: "MiSans",
			fontWeight: "500",
			localFonts: ["MiSans-Normal.ttf"],
			enableCompress: true, // 启用字体子集优化
		},
	},
	showLastModified: true, // 控制“上次编辑”卡片显示的开关
};
export const fullscreenWallpaperConfig: FullscreenWallpaperConfig = {
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
		], // 桌面横幅图片
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
		], // 移动横幅图片
	}, // 使用本地横幅图片
	position: "center", // 壁纸位置，等同于 object-position
	carousel: {
		enable: true, // 启用轮播
		interval: 5, // 轮播间隔时间（秒）
	},
	zIndex: -1, // 层级，确保壁纸在背景层
	opacity: 0.8, // 壁纸透明度
	blur: 3, // 背景模糊程度
};

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
					url: "/galgame/",
					icon: "material-symbols:videogame-asset",
				},
				{
					name: "Diary",
					url: "/diary/",
					icon: "material-symbols:book",
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

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/fix.webp", // 相对于 /src 目录
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

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

// Permalink 固定链接配置
export const permalinkConfig: PermalinkConfig = {
	enable: false, // 是否启用全局 permalink 功能
	format: "%postname%", // 默认使用文件名
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
	// 是否在主题切换时隐藏代码块以避免卡顿问题
	hideDuringThemeTransition: true,
};

export const commentConfig: CommentConfig = {
	enable: true, // 启用评论功能
	twikoo: {
		envId: "https://twkoo.520403.xyz",
		lang: "zh_CN",
	},
};

export const shareConfig: ShareConfig = {
	enable: true, // 启用分享功能
};

export const announcementConfig: AnnouncementConfig = {
	title: "公告", // 公告标题
	content: "Welcome to my blog! 这是我的博客.", // 公告内容
	closable: true, // 允许用户关闭公告
	link: {
		enable: true, // 启用链接
		text: "Learn More", // 链接文本
		url: "/about/", // 链接 URL
		external: false, // 内部链接
	},
};

export const musicPlayerConfig: MusicPlayerConfig = {
	enable: false, // 启用音乐播放器功能
	mode: "meting", // 音乐播放器模式，可选 "local" 或 "meting"
	meting_api:
		"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r", // Meting API 地址
	id: "14164869977", // 歌单ID
	server: "netease", // 音乐源服务器
	type: "playlist", // 播单类型
};

export const footerConfig: FooterConfig = {
	enable: true, // 是否启用Footer HTML注入功能
	customHtml: "", // HTML格式的自定义页脚信息
};

/**
 * 侧边栏布局配置
 */
export const sidebarLayoutConfig: SidebarLayoutConfig = {
	// 侧边栏组件属性配置列表
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

	// 侧栏组件布局配置
	components: {
		left: ["profile", "announcement", "categories", "tags"],
		right: ["site-stats", "calendar"],
		drawer: ["profile", "announcement", "categories", "tags"],
	},

	// 默认动画配置
	defaultAnimation: {
		enable: true,
		baseDelay: 0,
		increment: 50,
	},

	// 响应式布局配置
	responsive: {
		breakpoints: {
			mobile: 768,
			tablet: 1280,
			desktop: 1280,
		},
	},
};

export const sakuraConfig: SakuraConfig = {
	enable: false, // 默认关闭樱花特效
	sakuraNum: 17, // 樱花数量
	limitTimes: -1, // 樱花越界限制次数
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

// Pio 看板娘配置
export const pioConfig: import("./types/config").PioConfig = {
	enable: false, // 启用看板娘
	models: ["/pio/models/pio/model.json"], // 默认模型路径
	position: "left", // 默认位置
	width: 280,
	height: 250,
	mode: "draggable",
	hiddenOnMobile: true,
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

// 导出所有配置的统一接口
export const widgetConfigs = {
	profile: profileConfig,
	announcement: announcementConfig,
	music: musicPlayerConfig,
	layout: sidebarLayoutConfig,
	sakura: sakuraConfig,
	fullscreenWallpaper: fullscreenWallpaperConfig,
	pio: pioConfig,
	share: shareConfig,
} as const;
