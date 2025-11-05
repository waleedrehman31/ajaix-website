"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function CookieConsent() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const consent = localStorage.getItem("cookieConsent");
		if (!consent) {
			setTimeout(() => setVisible(true), 800);
		}
	}, []);

	const acceptCookies = () => {
		localStorage.setItem("cookieConsent", "accepted");
		setVisible(false);
	};

	const declineCookies = () => {
		localStorage.setItem("cookieConsent", "declined");
		setVisible(false);
	};

	if (!visible) return null;

	return (
		<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-lg w-[90%] md:w-auto bg-white/70 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-2xl p-5 flex flex-col md:flex-row items-start md:items-center gap-4 transition-all animate-slide-up">
			<div className="flex-1 text-sm text-gray-800 leading-snug">
				We use cookies to improve your experience and analyze site usage. By
				continuing, you agree to our{" "}
				<Link href="/privacy" className="text-blue-600 hover:underline">
					Privacy Policy
				</Link>{" "}
				and{" "}
				<Link href="/terms" className="text-blue-600 hover:underline">
					Terms of Service
				</Link>
				.
			</div>
			<div className="flex gap-2 w-full md:w-auto justify-end">
				<button
					onClick={declineCookies}
					className="text-gray-600 text-sm border border-gray-300 rounded-md px-3 py-1.5 hover:bg-gray-100 transition"
				>
					Decline
				</button>
				<button
					onClick={acceptCookies}
					className="text-white bg-blue-600 text-sm rounded-md px-3 py-1.5 hover:bg-blue-700 transition"
				>
					Accept
				</button>
			</div>
			<button
				onClick={() => setVisible(false)}
				className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
			>
				<X size={16} />
			</button>
		</div>
	);
}
