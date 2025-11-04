// app/privacy/page.tsx
import React from "react";
import SectionBadge from "../components/SectionBadge";

export const metadata = {
	title: "Privacy Policy — Ajaix",
	description:
		"Privacy Policy for Ajaix. Learn what personal information we collect, how we use it and your rights.",
};

const PrivacyPage = () => {
	const lastUpdated = "November 4, 2025";

	return (
		<main className="min-h-screen py-20 ">
			<div className="max-w-5xl mx-auto px-6 md:px-12">
				<div className="text-center mb-12">
					<SectionBadge content="🔒 Privacy Policy" />
					<h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4">
						Ajaix Privacy Policy
					</h1>
					<p className="mt-3 text-gray-600">
						Last updated: <span className="font-medium">{lastUpdated}</span>
					</p>
				</div>

				{/* Table of contents */}
				<aside className="mb-8">
					<div className="bg-white/40 backdrop-blur-2xl rounded-2xl p-4 border border-white/50 shadow-md">
						<h4 className="font-semibold text-gray-900 mb-2">Contents</h4>
						<ul className="space-y-2 text-sm text-gray-700">
							<li>
								<a href="#intro" className="hover:text-blue-600">
									1. Introduction
								</a>
							</li>
							<li>
								<a href="#data-we-collect" className="hover:text-blue-600">
									2. Data We Collect
								</a>
							</li>
							<li>
								<a href="#how-we-use" className="hover:text-blue-600">
									3. How We Use Your Data
								</a>
							</li>
							<li>
								<a href="#sharing" className="hover:text-blue-600">
									4. Sharing &amp; Disclosure
								</a>
							</li>
							<li>
								<a href="#cookies" className="hover:text-blue-600">
									5. Cookies &amp; Tracking
								</a>
							</li>
							<li>
								<a href="#security" className="hover:text-blue-600">
									6. Security
								</a>
							</li>
							<li>
								<a href="#your-rights" className="hover:text-blue-600">
									7. Your Rights
								</a>
							</li>
							<li>
								<a href="#children" className="hover:text-blue-600">
									8. Children
								</a>
							</li>
							<li>
								<a href="#changes" className="hover:text-blue-600">
									9. Changes
								</a>
							</li>
							<li>
								<a href="#contact" className="hover:text-blue-600">
									10. Contact
								</a>
							</li>
						</ul>
					</div>
				</aside>

				{/* Policy content */}
				<section className="space-y-8">
					<article
						id="intro"
						className="bg-white/40 backdrop-blur-2xl rounded-2xl p-6 border border-white/50 shadow-md"
					>
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							1. Introduction
						</h2>
						<p className="text-gray-700 leading-relaxed">
							Ajaix (“we”, “us”, “our”) is committed to protecting your privacy.
							This Privacy Policy explains how we collect, use, disclose, and
							protect personal information when you visit our website, use our
							services, or communicate with us. By using our services you agree
							to the practices described in this policy.
						</p>
					</article>

					<article
						id="data-we-collect"
						className="bg-white/40 backdrop-blur-2xl rounded-2xl p-6 border border-white/50 shadow-md"
					>
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							2. Data We Collect
						</h2>

						<h3 className="font-medium text-gray-800 mt-2">
							Information you give us
						</h3>
						<p className="text-gray-700 leading-relaxed">
							When you contact us, sign up for a newsletter, request a quote, or
							create an account, we may collect personal information such as:
							name, email address, phone number, company name, billing details,
							project description, and any files you provide.
						</p>

						<h3 className="font-medium text-gray-800 mt-4">
							Information we collect automatically
						</h3>
						<p className="text-gray-700 leading-relaxed">
							When you visit our website we may automatically collect device and
							usage data such as IP address, browser type, operating system,
							referral URLs, pages viewed, and timestamps. We use cookies and
							similar technologies for this purpose.
						</p>
					</article>

					<article
						id="how-we-use"
						className="bg-white/40 backdrop-blur-2xl rounded-2xl p-6 border border-white/50 shadow-md"
					>
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							3. How We Use Your Data
						</h2>
						<ul className="list-disc pl-5 text-gray-700 space-y-2">
							<li>To provide, operate and maintain our services.</li>
							<li>
								To communicate with you about projects, updates, and support.
							</li>
							<li>To personalize and improve the website and services.</li>
							<li>To process payments and billing (where applicable).</li>
							<li>
								To protect our legal rights and comply with legal obligations.
							</li>
						</ul>
					</article>

					<article
						id="sharing"
						className="bg-white/40 backdrop-blur-2xl rounded-2xl p-6 border border-white/50 shadow-md"
					>
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							4. Sharing &amp; Disclosure
						</h2>
						<p className="text-gray-700 leading-relaxed">
							We may share personal information with: (a) service providers who
							help deliver our services (e.g., hosting, payment processors,
							email providers); (b) when required by law or to respond to legal
							requests; and (c) in connection with a business transaction such
							as a merger or sale. We do not sell personal information.
						</p>
					</article>

					<article
						id="cookies"
						className="bg-white/40 backdrop-blur-2xl rounded-2xl p-6 border border-white/50 shadow-md"
					>
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							5. Cookies &amp; Tracking
						</h2>
						<p className="text-gray-700 leading-relaxed">
							We use cookies and similar technologies to improve site
							performance, analyze usage, provide features, and show relevant
							content. You can control cookies through your browser settings; be
							aware that disabling cookies may affect site functionality.
						</p>
					</article>

					<article
						id="security"
						className="bg-white/40 backdrop-blur-2xl rounded-2xl p-6 border border-white/50 shadow-md"
					>
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							6. Security
						</h2>
						<p className="text-gray-700 leading-relaxed">
							We implement reasonable administrative and technical safeguards to
							protect personal information. However, no method of transmission
							over the internet or electronic storage is 100% secure. If you
							suspect a security issue, contact us immediately.
						</p>
					</article>

					<article
						id="your-rights"
						className="bg-white/40 backdrop-blur-2xl rounded-2xl p-6 border border-white/50 shadow-md"
					>
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							7. Your Rights
						</h2>
						<p className="text-gray-700 leading-relaxed">
							Depending on your jurisdiction, you may have rights such as
							access, correction, deletion, portability, and objection to
							certain processing. To exercise your rights, please contact us
							(contact details below).
						</p>
					</article>

					<article
						id="children"
						className="bg-white/40 backdrop-blur-2xl rounded-2xl p-6 border border-white/50 shadow-md"
					>
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							8. Children
						</h2>
						<p className="text-gray-700 leading-relaxed">
							Our site and services are not directed to children under 13. We do
							not knowingly collect personal data from children. If you believe
							we have collected data from a child, contact us to request
							removal.
						</p>
					</article>

					<article
						id="changes"
						className="bg-white/40 backdrop-blur-2xl rounded-2xl p-6 border border-white/50 shadow-md"
					>
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							9. Changes to This Policy
						</h2>
						<p className="text-gray-700 leading-relaxed">
							We may update this Privacy Policy from time to time. When we make
							significant changes, we will post a prominent notice or update the
							“last updated” date above.
						</p>
					</article>

					<article
						id="contact"
						className="bg-white/40 backdrop-blur-2xl rounded-2xl p-6 border border-white/50 shadow-md"
					>
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							10. Contact
						</h2>
						<p className="text-gray-700 leading-relaxed">
							For questions or to exercise your rights, contact us at:
						</p>
						<p className="mt-3 text-gray-800 font-medium">contact@ajaix.com</p>
						<p className="text-gray-600 text-sm mt-1">
							Office No 1, 3rd Floor, Rehman Plaza, Mansehra, Pakistan
						</p>
					</article>
				</section>
			</div>
		</main>
	);
};

export default PrivacyPage;
