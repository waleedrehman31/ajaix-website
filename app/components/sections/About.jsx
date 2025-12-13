import React from "react";
import SectionBadge from "../SectionBadge";
import Badge from "../Badge";
import { Award, Target, Users, Zap } from "lucide-react";
import StatsCard from "../StatsCard";
import InvertedAboutImage from "../InvertedAboutImage";

const experties = [
	"React & Next.js",
	"Node.js",
	"PHP/Laravel",
	"Python",
	"Mobile Development",
	"UI/UX Design",
	"DevOps",
	"Wordpress",
	"AI/ML",
	"E-commerce",
];

const stats = [
	{
		count: "25+",
		icon: <Users className="w-6 h-6 text-blue-600" />,
		title: "Team Members",
	},
	{
		count: "8+",
		icon: <Award className="w-6 h-6 text-blue-600" />,
		title: "Years Experience",
	},
	{
		count: "500+",
		icon: <Target className="w-6 h-6 text-blue-600" />,
		title: "Projects Completed",
	},
	{
		count: "99%",
		icon: <Zap className="w-6 h-6 text-blue-600" />,
		title: "Client Satisfaction",
	},
];

const values = [
	{
		title: "Innovation",
		description:
			"We stay ahead of technology trends to deliver cutting-edge solutions.",
	},
	{
		title: "Quality",
		description:
			"Every line of code is crafted with precision and attention to detail.",
	},
	{
		title: "Collaboration",
		description:
			"We work closely with clients as partners in their digital transformation.",
	},
	{
		title: "Reliability",
		description: "Consistent delivery and ongoing support you can depend on.",
	},
];

const About = () => {
	return (
		<section id="about" className="py-20 ">
			<div className="overflow-hidden  py-20 md:py-10 ">
				<div className="max-w-7xl mx-auto px-6 md:px-12 content-center items-center gap-12  relative z-10">
					<div className="text-center mb-16">
						<SectionBadge content="👥 About Ajaix" />
						<h2
							className="text-3xl md:text-4xl font-bold text-gray-900 mb-4
            "
						>
							Passionate About Building Excellence
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							We're a team of dedicated software engineers, designers, and
							consultants committed to transforming businesses through
							innovative technology solutions.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 relative">
						<div className="absolute -inset-10 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-transparent rounded-[4rem] blur-3xl -z-10"></div>

						<div className="relative group">
							<div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/40 via-transparent to-purple-500/40 blur-2xl opacity-70 group-hover:opacity-100 transition duration-700"></div>

							<div className="overflow-hidden rounded-2xl relative border border-white/20 backdrop-blur-xl ">
								<InvertedAboutImage
									src="/about-us.png"
									alt="Modern office workspace"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10 opacity-40"></div>
							</div>

							<div className="absolute -bottom-8 -right-8 bg-white/30 backdrop-blur-2xl rounded-2xl shadow-xl p-6 max-w-[230px] border border-white/30  overflow-hidden">
								<div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-400/30 via-transparent to-purple-400/40 blur-xl -z-10"></div>
								<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-30"></div>

								<h4 className="text-3xl font-bold text-gray-900 mb-1 drop-shadow-sm">
									8+ Years
								</h4>
								<p className="text-sm text-gray-700 font-medium">
									of Excellence in Software Development
								</p>
							</div>
						</div>

						{/* Text Content */}
						<div className="space-y-6">
							<div>
								<h3 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
									Crafting Digital Solutions That Drive Success
								</h3>
								<p className="text-gray-600 leading-relaxed mb-6">
									Founded in 2016,{" "}
									<span className="font-semibold text-blue-600">Ajaix</span> has
									evolved from a small startup into a global tech company. We
									specialize in creating scalable, intuitive, and
									high-performance applications that empower businesses to
									thrive in the digital age.
								</p>
								<p className="text-gray-600 leading-relaxed">
									Our team combines deep technical expertise with design
									innovation to build products that not only look great but also
									deliver measurable results.
								</p>
							</div>

							<div className="space-y-4">
								<h4 className="font-semibold text-gray-900">
									Our Expertise Includes:
								</h4>
								<div className="flex flex-wrap gap-2">
									{experties.map((experty, index) => (
										<Badge content={experty} key={index} />
									))}
								</div>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
						{stats.map((state, index) => (
							<StatsCard key={index} state={state} />
						))}
					</div>
					<div>
						<h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
							Our Core Values
						</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
							{values.map((value, index) => (
								<div
									className="flex flex-col gap-6 rounded-xl text-center border-0 bg-white/30 backdrop-blur-3xl shadow-md hover:shadow-lg transition-shadow"
									key={index}
								>
									<div className="p-6">
										<h4 className="font-semibold text-gray-900 mb-3">
											{value.title}
										</h4>
										<p className="text-gray-600 leading-relaxed text-sm">
											{value.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
