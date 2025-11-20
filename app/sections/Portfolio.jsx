"use client";
import { useState } from "react";
import SectionBadge from "../components/SectionBadge";

const categories = ["All", "Web", "App", "AI", "Branding"];

const projects = [
	{
		id: 1,
		title: "Ajaix Web Platform",
		category: "Web",
		image:
			"https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=1000&q=80",
		description: "High-performance SaaS web solution with modern UI.",
	},
	{
		id: 2,
		title: "Mobile AI Assistant",
		category: "App",
		image:
			"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80",
		description: "Next-gen mobile app powered by AI automation.",
	},
	{
		id: 3,
		title: "AI Insights Dashboard",
		category: "AI",
		image:
			"https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1000&q=80",
		description: "Real-time data visualization with intelligent analytics.",
	},
	{
		id: 4,
		title: "Brand Identity System",
		category: "Design",
		image:
			"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
		description: "Glass-style branding for a new-age digital presence.",
	},
	{
		id: 5,
		title: "E-Commerce Revamp",
		category: "Web",
		image:
			"https://images.unsplash.com/photo-1581093588401-22a58d4b6d07?auto=format&fit=crop&w=1000&q=80",
		description: "Complete redesign and optimization for a retail brand.",
	},
	{
		id: 6,
		title: "Smart Workflow App",
		category: "App",
		image:
			"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80",
		description: "Seamless productivity experience on mobile platforms.",
	},
];

const Portfolio = () => {
	const [selected, setSelected] = useState("All");

	const filtered =
		selected === "All"
			? projects
			: projects.filter((p) => p.category === selected);

	return (
		<section id="portfolio" className="relative pb-24">
			<div className="absolute  bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-transparent rounded-[4rem] blur-3xl -z-10"></div>

			<div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
				<div className="mb-16">
					<SectionBadge content="💼 Our Work" />
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Crafting Digital Experiences
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						Explore a selection of projects that highlight our innovation,
						craft, and results-driven approach at{" "}
						<span className="font-semibold text-blue-600">Ajaix</span>.
					</p>
				</div>

				{/* Category Filters */}
				<div className="flex justify-center flex-wrap gap-3 mb-16">
					{categories.map((cat) => (
						<button
							key={cat}
							onClick={() => setSelected(cat)}
							className={`px-5 py-2 rounded-full border transition-all duration-300 backdrop-blur-md ${
								selected === cat
									? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg border-transparent"
									: "border-white/30 text-gray-600 hover:bg-white/10"
							}`}
						>
							{cat}
						</button>
					))}
				</div>

				{/* Projects Grid */}
				<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
					{filtered.map((project) => (
						<div
							key={project.id}
							className="relative group rounded-3xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-xl bg-white/10 hover:bg-white/20 transition-all duration-700"
						>
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-700"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
							<div className="absolute bottom-0 p-6 text-left text-white opacity-0 group-hover:opacity-100 transition-all duration-700">
								<h3 className="text-xl font-semibold">{project.title}</h3>
								<p className="text-sm mt-2 text-gray-300">
									{project.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
