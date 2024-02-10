import type { NavItems } from "./types";

export const NAV_ITEMS: NavItems = {
	home: {
		path: "/",
		title: "Acceuil",
	},
	blog: {
		path: "/blog",
		title: "Articles",
	},
	tags: {
		path: "/tags",
		title: "Mots clés",
	},
	media: {
		path: "/media",
		title: "Youtube",
	},
	about: {
		path: "/about",
		title: "A Propos",
	},
};

export const SITE = {
	// Your site's detail?
	name: "",
	title: "Crypto Afrique Futur",
	description: "",
	url: "https://astro-ink.vercel.app",
	githubUrl: "https://github.com/one-aalam/astro-ink",
	listDrafts: true,
	image:
		"https://raw.githubusercontent.com/one-aalam/astro-ink/main/public/astro-banner.png",
	// YT video channel Id (used in media.astro)
	ytChannelId: "",
	// Optional, user/author settings (example)
	// Author: name
	author: "NGUEMBHYT Nit Harley", // Example: Fred K. Schott
	// Author: Twitter handler
	authorLinkedin: "", // Example: FredKSchott
	// Author: Image external source
	authorImage: "../public/assets/image.png", // Example: https://pbs.twimg.com/profile_images/1272979356529221632/sxvncugt_400x400.jpg, https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png
	// Author: Bio
	authorBio:
		"La technologie Blockchain va changer le monde, chez Crypto Afrique Futur, nous ferrons de vous des acteurs majeurs de cette révolution !"
}
// Ink - Theme configuration
export const PAGE_SIZE = 8;
export const USE_POST_IMG_OVERLAY = false;
export const USE_MEDIA_THUMBNAIL = true;

export const USE_AUTHOR_CARD = true;
export const USE_SUBSCRIPTION = false; /* works only when USE_AUTHOR_CARD is true */

export const USE_VIEW_STATS = true;
