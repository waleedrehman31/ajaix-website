// app/terms/page.tsx
import React from "react";
import SectionBadge from "../components/SectionBadge";

export const metadata = {
	title: "Terms & Conditions — Ajaix",
	description:
		"Terms and Conditions for Ajaix. The legal agreement that governs use of our services and website.",
};

const TermsPage = () => {
	const lastUpdated = "November 4, 2025";

	return (
		<main className="min-h-screen py-20  ">
			<div className="max-w-5xl mx-auto px-6 md:px-12">
				<div className="text-center mb-12">
					<SectionBadge content="📜 Terms & Conditions" />
					<h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4">
						Ajaix Terms & Conditions
					</h1>
					<p className="mt-3 text-gray-600">
						Last updated: <span className="font-medium">{lastUpdated}</span>
					</p>
				</div>

				<div className="space-y-8">
					<article className="bg-white/40 backdrop-blur-2xl rounded-2xl p-6 border border-white/50 shadow-md">
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							1. Agreement to Terms
						</h2>
						<p className="text-gray-700 leading-relaxed">
							These Terms & Conditions (“Terms”) govern your access to and use
							of Ajaix services, website, and related offerings. By using our
							site or services you agree to these Terms. If you do not agree, do
							not use our services.
						</p>
					</article>

					<article className="bg-white/40 backdrop-blur-2xl rounded-2xl p-6 border border-white/50 shadow-md">
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							2. Services
						</h2>
						<p className="text-gray-700 leading-relaxed">
							Ajaix provides software development services including web,
							mobile, design, consulting, and cloud solutions. Project specifics
							are defined in separate statements of work or proposals.
						</p>
					</article>

					<article className="bg-white/40 backdrop-blur-2xl rounded-2xl p-6 border border-white/50 shadow-md">
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							3. Accounts &amp; Access
						</h2>
						<p className="text-gray-700 leading-relaxed">
							You are responsible for maintaining the confidentiality of your
							account credentials. You agree to provide accurate information and
							to notify us of any unauthorized access.
						</p>
					</article>

					<article className="bg-white/40 backdrop-blur-2xl rounded-2xl p-6 border border-white/50 shadow-md">
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							4. Payment &amp; Billing
						</h2>
						<p className="text-gray-700 leading-relaxed">
							Fees, payment schedules, and refund policies are specified in
							proposals, quotes, or statements of work. Late payments may incur
							interest or suspension of services.
						</p>
					</article>

					<article className="bg-white/40 backdrop-blur-2xl rounded-2xl p-6 border border-white/50 shadow-md">
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							5. User Conduct
						</h2>
						<p className="text-gray-700 leading-relaxed">
							Users must not misuse services (e.g., violating laws, infringing
							rights, introducing malware). We reserve the right to suspend or
							terminate accounts that breach these Terms.
						</p>
					</article>

					<article className="bg-white/40 backdrop-blur-2xl rounded-2xl p-6 border border-white/50 shadow-md">
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							6. Intellectual Property
						</h2>
						<p className="text-gray-700 leading-relaxed">
							Unless otherwise specified in a written agreement, Ajaix retains
							ownership of its pre-existing tools, frameworks and libraries.
							Deliverables may be licensed or transferred according to the
							project agreement.
						</p>
					</article>

					<article className="bg-white/40 backdrop-blur-2xl rounded-2xl p-6 border border-white/50 shadow-md">
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							7. Disclaimers
						</h2>
						<p className="text-gray-700 leading-relaxed">
							Services are provided “as is” to the extent permitted by law. We
							disclaim warranties to the maximum extent permitted.
						</p>
					</article>

					<article className="bg-white/40 backdrop-blur-2xl rounded-2xl p-6 border border-white/50 shadow-md">
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							8. Limitation of Liability
						</h2>
						<p className="text-gray-700 leading-relaxed">
							Except where prohibited, Ajaix’s liability for damages is limited
							to amounts paid for the specific services giving rise to the
							claim. We are not liable for indirect, incidental, or
							consequential damages.
						</p>
					</article>

					<article className="bg-white/40 backdrop-blur-2xl rounded-2xl p-6 border border-white/50 shadow-md">
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							9. Termination
						</h2>
						<p className="text-gray-700 leading-relaxed">
							Either party may terminate project engagements in accordance with
							the applicable agreement. Termination does not relieve the
							obligation to pay fees for services performed prior to
							termination.
						</p>
					</article>

					<article className="bg-white/40 backdrop-blur-2xl rounded-2xl p-6 border border-white/50 shadow-md">
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							10. Governing Law
						</h2>
						<p className="text-gray-700 leading-relaxed">
							These Terms are governed by the laws of the jurisdiction where
							Ajaix is established, except where local laws provide otherwise.
						</p>
					</article>

					<article className="bg-white/40 backdrop-blur-2xl rounded-2xl p-6 border border-white/50 shadow-md">
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							11. Changes
						</h2>
						<p className="text-gray-700 leading-relaxed">
							We may update these Terms occasionally. When material changes are
							made, we will notify users or update the “last updated” date.
						</p>
					</article>

					<article className="bg-white/40 backdrop-blur-2xl rounded-2xl p-6 border border-white/50 shadow-md">
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							12. Contact
						</h2>
						<p className="text-gray-700 leading-relaxed">
							For questions about these Terms, contact us at:
						</p>
						<p className="mt-3 text-gray-800 font-medium">contact@ajaix.com</p>
					</article>
				</div>
			</div>
		</main>
	);
};

export default TermsPage;
