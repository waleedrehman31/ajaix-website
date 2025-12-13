import React from "react";
import SectionBadge from "../SectionBadge";
import ServicesCard from "../ServicesCard";
import {
	ArrowRight,
	ChartColumn,
	Cloud,
	Code,
	Palette,
	Settings,
	Smartphone,
} from "lucide-react";

const services = [
	{
		title: "Web Development",
		description:
			"Custom web applications built with modern frameworks like React, Next.js, and Node.js for scalable business solutions.",
		points: [
			"Responsive Design",
			"SEO Optimized",
			"High Performance",
			"Security First",
		],
		link: "/services/web-development",
		icon: <Code className="w-6 h-6 text-blue-600" />,
		image: "/web-development.png",
	},
	{
		title: "Mobile App Development",
		description:
			"Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
		points: [
			"Cross-Platform",
			"Native Performance",
			"App Store Ready",
			"Push Notifications",
		],
		link: "/services/mobile-app-development",
		image: "/mobile-development.png",
		icon: <Smartphone className="w-6 h-6 text-blue-600" />,
	},
	{
		title: "Software Consulting",
		description:
			"Strategic technology consulting to help businesses make informed decisions about their software architecture.",
		points: [
			"Architecture Design",
			"Code Review",
			"Performance Optimization",
			"Best Practices",
		],
		link: "/services/software-consulting",
		image: "/conculting.png",
		icon: <Settings className="w-6 h-6 text-blue-600" />,
	},
	{
		title: "UI/UX Design",
		description:
			"User-centered design that creates intuitive and engaging digital experiences for your customers.",
		points: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
		link: "/services/ui-ux-design",
		image: "/ux-ui.png",
		icon: <Palette className="w-6 h-6 text-blue-600" />,
	},
	{
		title: "Cloud & DevOps",
		description:
			"Scalable cloud infrastructure and DevOps practices to ensure your applications run smoothly and efficiently.",
		points: ["AWS/Azure/GCP", "CI/CD Pipelines", "Monitoring", "Auto-scaling"],
		link: "/services/cloud-devops",
		image: "/cloud-and-devops.png",
		icon: <Cloud className="w-6 h-6 text-blue-600" />,
	},
	{
		title: "Data Analytics",
		description:
			"Transform your data into actionable insights with custom analytics solutions and business intelligence tools.",
		points: [
			"Data Visualization",
			"Real-time Analytics",
			"Custom Dashboards",
			"ML Integration",
		],
		link: "/services/data-analytics",
		image: "/data-analytics.png",
		icon: <ChartColumn className="w-6 h-6 text-blue-600" />,
	},
];

const Services = () => {
	return (
		<section id="services">
			<div className="overflow-hidden  py-20 md:py-10 ">
				<div className="max-w-7xl mx-auto px-6 md:px-12 content-center items-center gap-12  relative z-10">
					<div className="text-center mb-16">
						<SectionBadge content="🛠️ Our Services" />
						<h2
							className="text-3xl md:text-4xl font-bold text-gray-900 mb-4
            "
						>
							Comprehensive Software Solutions
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							From concept to deployment, we provide end-to-end software
							development services that help businesses thrive in the digital
							landscape.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
						{services.map((item, index) => (
							<ServicesCard key={index} service={item} />
						))}
					</div>
					<div className="mt-6 text-center">
						<p className="text-gray-600 mb-6">
							Don't see what you're looking for? We offer custom solutions
							tailored to your specific needs.
						</p>
						<a
							href="#contact-us"
							className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-10 rounded-md has-[>svg]:px-4 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
						>
							Discuss Your Project
							<ArrowRight className="w-5 h-5 ml-2" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
