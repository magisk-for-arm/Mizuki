// 本地 Game 数据配置
export type GameItem = {
	title: string;
	status: "playing" | "completed" | "planned" | "dropped";
	rating: number;
	cover: string;
	description: string;
	year: string;
	developer: string;
	tags: string[];
	link: string;
	progress: number; // 0-100 percentage or generic progress
	releaseDate: string;
};

const localGameList: GameItem[] = [
	{
		title: "ATRI -My Dear Moments-",
		status: "completed",
		rating: 10,
		cover: "https://lain.bgm.tv/pic/cover/l/c0/c2/296728_5X225.jpg",
		description:
			"In the near future, a sudden and unexplained sea rise has left much of human civilization underwater. Ikaruga Natsuki, a boy who lost his mother and his leg in an accident some years earlier, returns to his old home in the countryside.",
		year: "2020",
		developer: "Frontwing",
		tags: ["Visual Novel", "Sci-Fi", "Romance"],
		link: "https://store.steampowered.com/app/1230140/ATRI_My_Dear_Moments/",
		progress: 100,
		releaseDate: "2020-06-19",
	},
	{
		title: "Summer Pockets REFLECTION BLUE",
		status: "playing",
		rating: 9.5,
		cover: "https://lain.bgm.tv/pic/cover/l/56/74/295537_Qc333.jpg",
		description:
			"Protagonist Hairi Takahara travels to the island of Torishirojima to sort through the belongings of his late grandmother. There, he meets four girls who will change his life.",
		year: "2020",
		developer: "Key",
		tags: ["Visual Novel", "Romance", "Nakige"],
		link: "https://key.visualarts.gr.jp/summer/",
		progress: 45,
		releaseDate: "2020-06-26",
	},
	{
		title: "White Album 2",
		status: "planned",
		rating: 0,
		cover: "https://lain.bgm.tv/pic/cover/l/70/96/1231_Xl9l9.jpg",
		description:
			"The story of three high school students and the complex relationships that develop between them.",
		year: "2011",
		developer: "Leaf",
		tags: ["Visual Novel", "Drama", "Romance"],
		link: "https://aquaplus.jp/wa2/",
		progress: 0,
		releaseDate: "2011-12-22",
	},
];

export default localGameList;
