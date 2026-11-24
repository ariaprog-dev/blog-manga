import type { CollectionEntry } from 'astro:content';

export type GuideId = 'editions' | 'paper-vs-digital' | 'reading-guide' | 'anime-figures';

export interface GuideMeta {
	id: GuideId;
	href: string;
	icon: string;
	title: string;
	shortTitle: string;
	badge: string;
	description: string;
	summary: string;
	readingMinutes: number;
	keywords: string[];
	preferredSlugs: string[];
}

export interface RecommendedGuideLink {
	href: string;
	icon: string;
	label: string;
	title: string;
	description: string;
}

export const GUIDE_HUB = {
	href: '/guide/',
	title: '漫画・アニメの基礎知識ガイド',
	description:
		'漫画の版型（単行本・文庫・完全版）の違い、紙と電子書籍の賢い使い分け、SF・ファンタジーなど発想力で選ぶ名作鑑賞法、映像BD/4Kとフィギュア仕様の見方を体系的に整理した基礎ガイド。',
};

export const GUIDE_PAGES: GuideMeta[] = [
	{
		id: 'editions',
		href: '/guide/editions/',
		icon: '📐',
		title: '漫画の版型比較｜単行本・文庫・完全版',
		shortTitle: '版型比較（単行本・完全版）',
		badge: '出版仕様',
		description:
			'新書判・B6判の通常単行本から文庫版・新装版・完全版・愛蔵版・画集まで、判型サイズ・紙質・収録特典と本棚での収まり方の違いをわかりやすく解説します。',
		summary:
			'同じ作品でも版型が変わると原画の迫力・読みやすさ・耐久性が変わります。手元に置く一冊の最適な規格を見極める基準を整理。',
		readingMinutes: 6,
		keywords: [
			'単行本',
			'文庫',
			'完全版',
			'愛蔵版',
			'新装版',
			'大判',
			'化粧箱',
			'イラスト',
			'画集',
			'図録',
			'記録全集',
			'bunko',
			'aizouban',
			'masterpiece',
			'deluxe',
			'artbook',
			'illustration',
			'catalog',
		],
		preferredSlugs: [
			'aria-the-masterpiece-manga',
			'black-jack-akita-bunko',
			'mushishi-manga-aizouban-set-ranking',
			'hana-kimi-deluxe-complete-manga',
			'toma-no-shinzo-premium-review',
			'evangelion-die-sterne-artbook-review',
			'azumanga-daioh-illustration-book-review',
			'berserk-exhibition-catalog',
		],
	},
	{
		id: 'paper-vs-digital',
		href: '/guide/paper-vs-digital/',
		icon: '📚',
		title: '紙と電子書籍の使い分け｜単行本と保管術',
		shortTitle: '紙と電子書籍・保管術',
		badge: '買い方・保存',
		description:
			'「まずは電子で気軽に出会い、何度も読み返したい名作は紙の単行本で揃える」実践的な使い分け基準と、全巻セット選び・漫画の劣化を防ぐ保管対策を解説します。',
		summary:
			'試し読みや収納力に優れる電子版と、所有感・再読体験・ページ一覧性に勝る紙の単行本。両方の強みを活かす買い分けと棚の守り方。',
		readingMinutes: 6,
		keywords: [
			'電子書籍',
			'電子',
			'紙',
			'全巻',
			'セット',
			'雑誌',
			'比較',
			'digital',
			'set',
			'box',
			'magazine',
			'spirits',
			'dmm',
			'kobo',
			'comparison',
		],
		preferredSlugs: [
			'master-keaton-digital-review',
			'space-brothers-manga-set',
			'mob-psycho-100-manga-set-guide',
			'doraemon-long-story',
			'zatch-bell-manga',
			'gekkan-shonen-magazine-review',
			'weekly-big-comics-spirits-review',
			'date-masamune-yokoyama-manga-vs-comparison',
		],
	},
	{
		id: 'reading-guide',
		href: '/guide/reading-guide/',
		icon: '🌌',
		title: '名作漫画の探し方｜SF・ファンタジー鑑賞',
		shortTitle: '名作探し（SF・発想力）',
		badge: '作品選び',
		description:
			'「どうやってこの世界観を思いついたのか」と唸る発想力重視のSF・ファンタジーを軸に、掲載誌・作家系譜・構成美から夜更かし向きの名作を見つける鑑賞ガイド。',
		summary:
			'少年誌・青年誌の違いに縛られず、独創的な設定・世界観構築・短編の切れ味を頼りに「生涯の本棚」に加えたくなる作品と出会う方法。',
		readingMinutes: 7,
		keywords: [
			'sf',
			'ファンタジー',
			'ミステリー',
			'サスペンス',
			'ホラー',
			'ドラえもん',
			'藤子',
			'手塚',
			'浦沢',
			'皆川',
			'五十嵐',
			'地球',
			'世界',
			'日常',
			'歴史',
			'ranking',
			'review',
			'manga',
		],
		preferredSlugs: [
			'doraemon-manga',
			'doraemon-long-story',
			'umwelt-igarashi-daisuke-review',
			'monster-urasawa-naoki-review',
			'ch-earth-motion-manga',
			'panpanya-kani-sasowarete-review',
			'hellhound-minagawa-ryoji-review',
			'morohoshi-shiori-shimiko-set-ranking',
		],
	},
	{
		id: 'anime-figures',
		href: '/guide/anime-figures/',
		icon: '🎬',
		title: 'アニメ4K・BDとフィギュア仕様の基礎',
		shortTitle: 'アニメBD/4K・フィギュア',
		badge: '映像・立体',
		description:
			'DVD-BOX・Blu-ray BOX・4K UHDのリマスター規格と視聴環境の注意点、ノンスケールとスケールフィギュアの違いを客観的に整理した入門ガイド。',
		summary:
			'名作アニメのフィルム修復・HDR対応ソフトを見極めるチェック項目と、飾る楽しさを広げるフィギュア規格の読み解き方をまとめました。',
		readingMinutes: 6,
		keywords: [
			'blu-ray',
			'bluray',
			'4k',
			'dvd',
			'box',
			'uhd',
			'hdr',
			'アニメ',
			'劇場',
			'サントラ',
			'フィギュア',
			'pop up parade',
			'立体',
			'メカニクス',
			'anime',
			'figure',
			'soundtrack',
			'ova',
			'movie',
		],
		preferredSlugs: [
			'akira-4k-bluray-review',
			'metropolis-4k-bluray-review',
			'oneamis-wing-4k-bluray-deep-dive',
			'denno-coil-bluray-box',
			'the-orbital-children-manga-box',
			'neon-genesis-evangelion-tv-dvdbox',
			'cowboy-bebop-pop-up-parade-spike',
			'pop-up-parade-nikaido-hiro',
			'beatless-kouka-figure-review',
			'hj-mechanics-functional-beauty',
		],
	},
];

export const GUIDE_PAGE_MAP: Record<GuideId, GuideMeta> = Object.fromEntries(
	GUIDE_PAGES.map((g) => [g.id, g])
) as Record<GuideId, GuideMeta>;

const READING_GUIDE_TEXT_RE =
	/(?:doraemon|ドラえもん|sf|ファンタジー|ホラー|ミステリー|サスペンス|monster|urasawa|parasyte|kiseiju|umwelt|panpanya|ito-junji|umezu|morohoshi|minagawa|orbital-children|ch-earth-motion)/i;

const EDITIONS_TEXT_RE =
	/(?:bunko|aizouban|masterpiece|deluxe|premium|artbook|illustration|catalog|kiroku-zenshu|文庫|愛蔵版|完全版|画集|イラスト|図録|記録全集|die-sterne)/i;

const PAPER_DIGITAL_TEXT_RE =
	/(?:digital|電子|-set|-box|全巻|セット|magazine|spirits|vs-comparison|比較|対比)/i;

const ANIME_FIGURE_TEXT_RE =
	/(?:blu-ray|bluray|dvd|4k|uhd|figure|pop-up-parade|soundtrack|mechanics|bd-box|ova)/i;

/**
 * 記事スラッグ・タイトル・メディア種別から関連性の高い基礎知識ページを2件返す
 */
export function getRecommendedGuidesForPost(
	slug: string,
	title: string,
	mediaType?: string
): RecommendedGuideLink[] {
	const text = `${slug} ${title}`.toLowerCase();
	let ids: GuideId[];

	if (mediaType === 'anime' || mediaType === 'figure' || ANIME_FIGURE_TEXT_RE.test(text)) {
		if (mediaType === 'figure' || /(?:figure|pop-up-parade|mechanics)/.test(text)) {
			ids = ['anime-figures', 'editions'];
		} else {
			ids = ['anime-figures', 'reading-guide'];
		}
	} else if (/(?:digital|デジタル|電子)/i.test(text)) {
		ids = ['paper-vs-digital', 'editions'];
	} else if (EDITIONS_TEXT_RE.test(text)) {
		ids = ['editions', 'paper-vs-digital'];
	} else if (PAPER_DIGITAL_TEXT_RE.test(text)) {
		ids = ['paper-vs-digital', 'reading-guide'];
	} else if (READING_GUIDE_TEXT_RE.test(text)) {
		ids = ['reading-guide', 'paper-vs-digital'];
	} else {
		ids = ['reading-guide', 'editions'];
	}

	return ids.map((id) => {
		const meta = GUIDE_PAGE_MAP[id];
		return {
			href: meta.href,
			icon: meta.icon,
			label: `基礎知識｜${meta.shortTitle}`,
			title: meta.title,
			description: meta.summary,
		};
	});
}

/**
 * 各基礎知識ページの下部に表示する関連レビュー記事（最大limit件）を抽出する
 */
export function filterPostsForGuide(
	guideId: GuideId,
	allPosts: CollectionEntry<'blog'>[],
	limit = 6
): CollectionEntry<'blog'>[] {
	const meta = GUIDE_PAGE_MAP[guideId];
	const keywords = meta.keywords.map((kw) => kw.toLowerCase());
	const preferredRank = new Map(meta.preferredSlugs.map((slug, idx) => [slug, idx]));

	const getPriorityScore = (post: CollectionEntry<'blog'>): number => {
		const slug = post.id.toLowerCase();
		const rank = preferredRank.get(slug);
		if (rank !== undefined) {
			return 1000 - rank * 10;
		}
		if (guideId === 'anime-figures') {
			if (post.data.mediaType === 'figure') return 600;
			if (post.data.mediaType === 'anime') return 550;
		}
		const haystack = `${post.id} ${post.data.title} ${(post.data.tags || []).join(' ')} ${post.data.category || ''} ${post.data.genre || ''}`.toLowerCase();
		let score = keywords.reduce((acc, kw) => acc + (haystack.includes(kw) ? 10 : 0), 0);
		if (guideId === 'editions' && EDITIONS_TEXT_RE.test(haystack)) score += 60;
		if (guideId === 'paper-vs-digital' && PAPER_DIGITAL_TEXT_RE.test(haystack)) score += 60;
		if (guideId === 'reading-guide' && post.data.mediaType === 'comic') score += 30;
		return score;
	};

	const sorted = [...allPosts].sort((a, b) => {
		const scoreDiff = getPriorityScore(b) - getPriorityScore(a);
		if (scoreDiff !== 0) return scoreDiff;
		return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
	});

	return sorted.slice(0, limit);
}
