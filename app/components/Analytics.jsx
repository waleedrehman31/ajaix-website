"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function Analytics() {
	const gaId = process.env.NEXT_PUBLIC_GA_ID;
	console.log(process.env.NEXT_PUBLIC_GA_ID);
	useEffect(() => {
		const consent = localStorage.getItem("cookieConsent");
		if (consent === "accepted" && gaId) {
			initGA(gaId);
		}
	}, [gaId]);

	const initGA = (gaId) => {
		if (window.gtag) return; // Prevent duplicate init

		// Load the Google script dynamically
		const script = document.createElement("script");
		script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
		script.async = true;
		document.head.appendChild(script);

		// Initialize GA
		window.dataLayer = window.dataLayer || [];
		function gtag(...args) {
			window.dataLayer.push(args);
		}
		window.gtag = gtag;

		gtag("js", new Date());
		gtag("config", gaId);
		console.log("✅ Google Analytics initialized:", gaId);
	};

	// Attach enableGA globally so CookieConsent can trigger it
	useEffect(() => {
		window.enableGA = () => {
			const gaId = process.env.NEXT_PUBLIC_GA_ID;
			if (gaId) initGA(gaId);
		};
	}, []);

	return (
		<Script id="ga-setup" strategy="afterInteractive">
			{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
      `}
		</Script>
	);
}
