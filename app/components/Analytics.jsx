"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function Analytics() {
	const gaId = process.env.NEXT_PUBLIC_GA_ID;

	useEffect(() => {
		const consent = localStorage.getItem("cookieConsent");
		if (consent === "accepted" && gaId) {
			loadGA();
		}
	}, [gaId]);

	const loadGA = () => {
		if (!gaId || window.gtag) return;

		const script = document.createElement("script");
		script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
		script.async = true;
		document.head.appendChild(script);

		// Initialize GA
		window.dataLayer = window.dataLayer || [];
		function gtag(...args) {
			window.dataLayer.push(args);
		}
		gtag("js", new Date());
		gtag("config", gaId);
		window.gtag = gtag;
	};

	// Re-run when cookie accepted (without reload)
	useEffect(() => {
		window.enableGA = loadGA;
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
