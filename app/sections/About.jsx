import React from "react";
import SectionBadge from "../components/SectionBadge";
import Badge from "../components/Badge";
import { Award, Target, Users, Zap } from "lucide-react";
import StatsCard from "../components/StatsCard";

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
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
						<div className="relative">
							<div className="overflow-hidden rounded-2xl shadow-xl">
								<img
									src="https://images.unsplash.com/photo-1586202690666-e1f32e218afe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NTQzOTE2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
									alt="Modern office workspace"
									className="w-full h-[500px] object-cover"
								/>
							</div>
							<div className="absolute -bottom-6 -right-6 bg-white/30 backdrop-blur-3xl rounded-xl shadow-lg p-6 max-w-[210px]">
								<h4 className="text-2xl font-bold text-blue-100 mb-1">
									8+ Years
								</h4>
								<p className="text-sm text-blue-200">
									of Excellence in Software Development
								</p>
							</div>
						</div>
						<div className="space-y-6">
							<div>
								<h3 className="text-2xl font-bold text-gray-900 mb-4">
									Crafting Digital Solutions That Drive Success
								</h3>
								<p className="text-gray-600 leading-relaxed mb-6">
									Founded in 2016, PersiSoft has grown from a small startup to a
									leading software development agency. We specialize in creating
									scalable, maintainable, and user-friendly applications that
									solve real business problems.
								</p>
								<p className="text-gray-600 leading-relaxed ">
									Our team combines technical expertise with creative
									problem-solving to deliver solutions that not only meet
									current needs but also scale with your business growth.
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
