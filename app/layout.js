import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import CookieConsent from "./components/CookieConsent";

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
				<div className=" bg-gradient-to-tl from-violet-100 to-blue-100  ">
					<Navbar />
					{children}
					<Footer />
				</div>
				<CookieConsent />
			</body>
		</html>
	);
}
