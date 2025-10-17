import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const RobotoSans = Roboto({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const RobotoMono = Roboto_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "AJAIX | Innovative Software & Digital Solutions Company",
	description:
		"AJAIX is a leading software development company offering custom web, app, and AI-powered solutions. We help businesses grow through technology, creativity, and innovation.",
};
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${RobotoSans.variable} ${RobotoMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
