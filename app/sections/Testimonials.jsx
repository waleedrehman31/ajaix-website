"use client";
import React, { useEffect, useState } from "react";
import SectionBadge from "../components/SectionBadge";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
	{
		name: "Sarah Johnson",
		role: "CEO, NovaTech",
		image: "https://randomuser.me/api/portraits/women/65.jpg",
		quote:
			"Ajaix transformed our vision into a powerful, scalable product. Their design and development quality exceeded our expectations!",
		rating: 5,
	},
	{
		name: "David Kim",
		role: "Founder, FlowAI",
		image: "https://randomuser.me/api/portraits/men/44.jpg",
		quote:
			"Their team blended creativity with technical mastery — our AI platform now runs smoother and faster than ever!",
		rating: 5,
	},
	{
		name: "Emma Williams",
		role: "Marketing Head, Bloomify",
		image: "https://randomuser.me/api/portraits/women/47.jpg",
		quote:
			"We loved their collaborative approach. Every stage of development felt transparent and purpose-driven.",
		rating: 4,
	},
	{
		name: "Liam Patel",
		role: "CTO, TradeLink",
		image: "https://randomuser.me/api/portraits/men/61.jpg",
		quote:
			"Ajaix delivered our web platform with precision and performance. We scaled to thousands of users effortlessly.",
		rating: 5,
	},
];

const Testimonials = () => {
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % testimonials.length);
		}, 6000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section id="testimonials" className="relative py-24 overflow-hidden">
			<div className="absolute -inset-10 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-transparent rounded-[4rem] blur-3xl -z-10"></div>

			<div className="max-w-6xl mx-auto px-6 text-center relative z-10">
				{/* Heading */}
				<div className="mb-16">
					<SectionBadge content="💬 Testimonials" />
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						What Our Clients Say
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						We build partnerships that last. Here’s what our clients say about
						their experience working with{" "}
						<span className="font-semibold text-blue-600">Ajaix</span>.
					</p>
				</div>

				{/* Carousel */}
				<div className="relative flex justify-center items-center overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent blur-3xl rounded-[4rem] -z-10"></div>

					{testimonials.map((t, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.9, y: 30 }}
							animate={{
								opacity: current === index ? 1 : 0,
								scale: current === index ? 1 : 0.95,
								y: current === index ? 0 : 50,
							}}
							transition={{ duration: 0.6 }}
							className={`absolute w-full max-w-3xl mx-auto ${
								current === index
									? "pointer-events-auto"
									: "pointer-events-none"
							}`}
						>
							<div className="relative bg-white/30 backdrop-blur-2xl border border-white/30 rounded-3xl p-10 shadow-lg text-center transition-all duration-500 hover:shadow-xl">
								<div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-transparent rounded-3xl -z-10"></div>
								<div className="flex justify-center mb-6">
									<img
										src={t.image}
										alt={t.name}
										className="w-20 h-20 rounded-full border-4 border-white/40 shadow-lg"
									/>
								</div>
								<p className="text-lg text-gray-800 italic mb-6 leading-relaxed">
									“{t.quote}”
								</p>
								<div className="flex justify-center mb-2">
									{Array.from({ length: t.rating }).map((_, i) => (
										<Star
											key={i}
											className="w-5 h-5 text-yellow-400 fill-yellow-400"
										/>
									))}
								</div>
								<h4 className="text-lg font-semibold text-gray-900">
									{t.name}
								</h4>
								<p className="text-sm text-gray-600">{t.role}</p>
							</div>
						</motion.div>
					))}
				</div>

				{/* Dots Navigation */}
				<div className="flex justify-center gap-3 mt-10">
					{testimonials.map((_, i) => (
						<button
							key={i}
							onClick={() => setCurrent(i)}
							className={`w-3 h-3 rounded-full transition-all ${
								current === i
									? "bg-gradient-to-r from-blue-500 to-purple-600 scale-125 shadow-lg"
									: "bg-gray-400/40 hover:bg-gray-500/60"
							}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
