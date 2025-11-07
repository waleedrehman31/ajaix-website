import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import CookieConsent from "./components/CookieConsent";
import { siteConfig } from "./metadata";
import Analytics from "./components/Analytics";

const RobotoSans = Roboto({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const RobotoMono = Roboto_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

// export const metadata = {
// 	metadataBase: new URL(siteConfig.url),
// 	title: "AJAIX | Innovative Software & Digital Solutions Company",
// 	description:
// 		"AJAIX is a leading software development company offering custom web, app, and AI-powered solutions. We help businesses grow through technology, creativity, and innovation.",
// };

export const metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: siteConfig.keywords,
	authors: [{ name: siteConfig.creator }],
	creator: siteConfig.creator,
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
		images: [
			{
				url: `${siteConfig.url}/og-image.jpg`,
				width: 1200,
				height: 630,
				alt: "AJAIX Technologies",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
		creator: siteConfig.creator,
		images: [`${siteConfig.url}/og-image.jpg`],
	},
	alternates: {
		canonical: siteConfig.url,
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta name="apple-mobile-web-app-title" content="AJAIX" />
				<meta
					name="facebook-domain-verification"
					content="sx0xzls6ibmjqg5n5vf7oyfy3elqlm"
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							name: siteConfig.name,
							url: siteConfig.url,
							logo: `${siteConfig.url}/logo.png`,
							sameAs: Object.values(siteConfig.social),
						}),
					}}
				></script>
			</head>
			<body
				className={`${RobotoSans.variable} ${RobotoMono.variable} antialiased`}
			>
				<div className=" bg-gradient-to-tl from-violet-100 to-blue-100  ">
					<Navbar />
					{children}
					<Footer />
				</div>
				<Analytics />
				<CookieConsent />
			</body>
		</html>
	);
}
