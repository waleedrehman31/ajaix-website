"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function Analytics() {
	const gaId = process.env.NEXT_PUBLIC_GA_ID;

	// Check if user consented to analytics
	useEffect(() => {
		const consent = localStorage.getItem("cookie_consent");
		if (consent === "accepted") {
			loadGA();
		}
	}, []);

	const loadGA = () => {
		if (!gaId) return;
		const script = document.createElement("script");
		script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
		script.async = true;
		document.head.appendChild(script);

		window.dataLayer = window.dataLayer || [];
		function gtag(...args) {
			// @ts-ignore
			window.dataLayer.push(args);
		}
		gtag("js", new Date());
		gtag("config", gaId);
	};

	return (
		<>
			{/* This loads GA after consent dynamically */}
			<Script id="ga-init" strategy="afterInteractive">
				{`
					window.enableGA = function() {
						localStorage.setItem("cookie_consent", "accepted");
						location.reload(); // reload to trigger GA
					};
				`}
			</Script>
		</>
	);
}
