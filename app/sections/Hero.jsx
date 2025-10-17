import React from "react";
import { ArrowRight, CheckCircle, Play } from "lucide-react";
import SectionBadge from "../components/SectionBadge";

const Hero = () => {
	return (
		<section
			id="home"
			className="relative overflow-hidden bg-gradient-to-tl from-violet-200 to-blue-100 py-20 md:py-10"
		>
			<div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-300 opacity-60 rounded-full blur-3xl"></div>
			<div className="absolute -bottom-24 -right-24 w-96 h-96 bg-violet-300 opacity-60 rounded-full blur-3xl"></div>

			<div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
				<div
					className="space-y-8 animate-fadeInUp"
					style={{ animationDelay: "0.1s" }}
				>
					<SectionBadge content="🚀 Leading Software Development Agency" />

					<h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
						Transform Your Ideas Into <br />
						<span className="text-blue-600">Digital Reality</span>
					</h1>

					<p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
						We specialize in creating cutting-edge web applications, mobile
						apps, and custom software solutions that drive business growth and
						innovation.
					</p>

					<div className="flex flex-wrap gap-4 md:gap-6">
						{[
							"500+ Projects Delivered",
							"50+ Happy Clients",
							"24/7 Support",
						].map((text, i) => (
							<div
								key={i}
								className="flex items-center space-x-2 animate-fadeInUp"
								style={{ animationDelay: `${0.2 + i * 0.1}s` }}
							>
								<CheckCircle className="w-5 h-5 text-green-500" />
								<span className="text-gray-800 font-medium">{text}</span>
							</div>
						))}
					</div>

					<div className="flex flex-wrap gap-4 pt-4">
						<a
							href="#"
							className="inline-flex items-center justify-center px-8 py-3 text-white text-sm font-semibold bg-blue-600 hover:bg-blue-700 rounded-md shadow-md transition"
						>
							Start Your Project
							<ArrowRight className="ml-2 h-5 w-5" />
						</a>
						<a
							href="#"
							className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 rounded-md shadow-sm transition"
						>
							<Play className="h-5 w-5 mr-2" /> Get Demo
						</a>
					</div>

					<div
						className="pt-8 animate-fadeInUp"
						style={{ animationDelay: "0.6s" }}
					>
						<p className="text-sm text-gray-500 mb-4">
							Trusted by industry leaders
						</p>
						<div className="flex items-center flex-wrap gap-8 opacity-60">
							{["TechCorp", "InnovateLab", "StartupXYZ"].map((brand, i) => (
								<div
									key={i}
									className="text-2xl font-bold text-gray-400 tracking-wide"
								>
									{brand}
								</div>
							))}
						</div>
					</div>
				</div>

				<div
					className="relative animate-fadeInUp"
					style={{ animationDelay: "0.3s" }}
				>
					<div className="relative rounded-2xl overflow-hidden shadow-2xl">
						<img
							className="w-full object-cover"
							src="https://images.unsplash.com/photo-1582138825658-fb952c08b282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
							alt="Software development team"
						/>
						<div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-[200px]">
							<div className="flex items-center space-x-2">
								<div className="w-3 h-3 bg-green-500 rounded-full"></div>
								<span className="text-sm font-medium">99.9% Uptime</span>
							</div>
							<p className="text-xs text-gray-600 mt-1">
								Reliable &amp; Scalable Solutions
							</p>
						</div>
						<div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-[200px]">
							<div className="flex items-center space-x-2">
								<div className="w-3 h-3 bg-blue-500 rounded-full"></div>
								<span className="text-sm font-medium">Agile Development</span>
							</div>
							<p className="text-xs text-gray-600 mt-1">
								Fast &amp; Efficient Delivery
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
