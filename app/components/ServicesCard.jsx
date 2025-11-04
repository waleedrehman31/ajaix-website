import { ArrowRight, Sparkles } from "lucide-react";
import React from "react";

const ServicesCard = ({ service }) => {
	return (
		<article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/20 bg-white/20 backdrop-blur-2xl shadow-[0_8px_32px_rgba(31,38,135,0.08)] transition-all duration-500 hover:shadow-[0_12px_45px_rgba(31,38,135,0.15)] hover:-translate-y-1">
			<div className="relative">
				<img
					src={service.image}
					alt={service.title}
					className="w-full h-64 object-cover rounded-t-2xl transition-transform duration-700 group-hover:scale-102"
				/>
				<div className="absolute top-4 left-4 bg-white/40 backdrop-blur-2xl rounded-xl p-3 shadow-md border border-white/40 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/60">
					{service.icon || <Sparkles className="w-6 h-6 text-blue-600" />}
				</div>

				<div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-t-2xl"></div>
			</div>

			<div className="p-6 flex flex-col flex-grow">
				<h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
					{service.title}
				</h3>

				<p className="mt-3 text-gray-700 leading-relaxed">
					{service.description}
				</p>

				<div className="mt-4 space-y-2">
					{service.points.map((point, index) => (
						<div
							key={index}
							className="flex items-center text-sm text-gray-600"
						>
							<span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
							{point}
						</div>
					))}
				</div>

				<a
					href={service.link}
					className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-blue-600/60 text-blue-700 font-semibold px-5 py-2 text-sm transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-md"
				>
					Learn More
					<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
				</a>
			</div>

			<div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-700">
				<div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-400/10 via-cyan-400/10 to-purple-400/10 blur-2xl"></div>
			</div>

			<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
				<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[20deg] translate-x-[-100%] animate-[shine_2s_ease-in-out_forwards] rounded-2xl"></div>
			</div>
		</article>
	);
};

export default ServicesCard;
