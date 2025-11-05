import { siteConfig } from "./metadata";

export default function manifest() {
	return {
		name: siteConfig.name,
		short_name: "AJAIX",
		description: siteConfig.description,
		start_url: "/",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#2563eb", // your primary brand blue
		icons: [
			{
				src: "/icons/icon-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/icons/icon-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
			{
				src: "/icons/maskable_icon.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "maskable",
			},
		],
	};
}
