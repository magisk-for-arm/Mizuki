import fs from "node:fs";
import path from "node:path";

import localGameList, { type GameItem } from "../data/game";
import I18nKey from "../i18n/i18nKey";
import { i18n } from "../i18n/translation";

interface RawGameItem {
	title?: string;
	cover?: string;
	link?: string;
	status?: string;
	rating?: number | string;
	progress?: number | string;
	description?: string;
	year?: string;
	studio?: string;
	genre?: string[];
	startDate?: string;
}

export type GameSourceConfig =
	| { type: "local"; data: GameItem[] }
	| {
			type: "json";
			filename: string;
			fetchOnDev?: boolean;
			emptyDescription?: string;
	  };

function loadGameData(filename: string): GameItem[] {
	const dataPath = path.join(process.cwd(), `src/data/${filename}`);

	if (!fs.existsSync(dataPath)) {
		console.warn(`[Game] Data file not found: ${dataPath}`);
		return [];
	}

	try {
		const fileContent = fs.readFileSync(dataPath, "utf-8");
		const rawData = JSON.parse(fileContent) as RawGameItem[];

		return rawData.map((item) => ({
			title: item.title || "Unknown",
			cover: item.cover || "",
			link: item.link || "",
			status: (item.status || "planned") as GameItem["status"],
			rating: Number(item.rating) || 0,
			progress: Number(item.progress) || 0,
			description: item.description || "",
			year: item.year || "",
			developer: item.studio || "",
			tags: Array.isArray(item.genre) ? item.genre : [],
			releaseDate: item.startDate || "",
		}));
	} catch (error) {
		console.error(`[Game] Failed to parse ${filename}:`, error);
		return [];
	}
}

export function getGameSourceConfigs(): Record<string, GameSourceConfig> {
	return {
		local: {
			type: "local",
			data: localGameList,
		},
		bangumi: {
			type: "json",
			filename: "bangumi-game-data.json",
			fetchOnDev: undefined,
			emptyDescription: i18n(I18nKey.animeEmptyBangumi),
		},
	};
}

export function getGameList(
	mode: string,
	sourceConfigs: Record<string, GameSourceConfig>,
): { gameList: GameItem[]; currentConfig: GameSourceConfig | undefined } {
	let gameList: GameItem[] = [];
	const currentConfig = sourceConfigs[mode];

	if (currentConfig) {
		if (currentConfig.type === "local") {
			gameList = currentConfig.data;
		} else if (currentConfig.type === "json") {
			const isDev = import.meta.env.DEV;
			const shouldFetchOnDev = currentConfig.fetchOnDev ?? false;
			const skipLoad = isDev && !shouldFetchOnDev;

			if (skipLoad) {
				console.log(`[Dev] Skipping ${mode} data load (fetchOnDev is off).`);
				gameList = [];
			} else {
				gameList = loadGameData(currentConfig.filename);
			}
		}
	} else {
		console.warn(`[Game] Unknown or unconfigured mode: ${mode}`);
	}

	return { gameList, currentConfig };
}

export function getGameStatusMap(): Record<
	string,
	{ text: string; class: string; icon: string }
> {
	return {
		playing: {
			text: i18n(I18nKey.animeStatusWatching),
			class:
				"bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
			icon: "▶",
		},
		completed: {
			text: i18n(I18nKey.animeStatusCompleted),
			class: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
			icon: "✓",
		},
		planned: {
			text: i18n(I18nKey.animeStatusPlanned),
			class:
				"bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
			icon: "❤",
		},
		dropped: {
			text: i18n(I18nKey.animeStatusDropped),
			class: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
			icon: "✗",
		},
	};
}
