import {
	Facebook,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Phone,
	Github,
} from "lucide-react";
import React from "react";

const contacts = [
	{
		title: "contact@ajaix.com",
		icon: <Mail className="w-4 h-4 mr-2" />,
	},
	{
		title: "+92 336 0441222",
		icon: <Phone className="w-4 h-4 mr-2" />,
	},
	{
		title: "Office No 1, 3rd Floor, Rehman Plaza, Mansehra, Pakistan",
		icon: <MapPin className="w-4 h-4 mr-2" />,
	},
];

const services = [
	{
		title: "Web Development",
		link: "/services/web-development",
	},
	{
		title: "Mobile App Development",
		link: "/services/mobile-app-development",
	},
	{
		title: "Software Consulting",
		link: "/services/software-consulting",
	},
	{
		title: "UI/UX Design",
		link: "/services/ui-ux-design",
	},
	{
		title: "Cloud & DevOps",
		link: "/services/cloud-devops",
	},
	{
		title: "Data Analytics",
		link: "/services/data-analytics",
	},
];

const links = [
	{
		title: "About Us",
		link: "#about-us",
	},
	{
		title: "Services",
		link: "#services",
	},
	{
		title: "Contact Us",
		link: "#contact-us",
	},
];

const socialMedia = [
	{
		icon: <Facebook className="w-5 h-5" />,
		link: "https://facebook.com",
	},
	{
		icon: <Linkedin className="w-5 h-5" />,
		link: "https://linkedIn.com",
	},
	{
		icon: <Instagram className="w-5 h-5" />,
		link: "https://instagram.com",
	},
	{
		icon: <Github className="w-5 h-5" />,
		link: "https://github.com",
	},
];

const Footer = () => {
	return (
		<footer className="bg-white/30 backdrop-blur-3xl">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
					<div className="col-span-1 md:col-span-2">
						<h3 className="text-2xl font-bold mb-4">AJAIX</h3>
						<p className="text-gray-600 mb-6 max-w-md">
							Leading software development agency specializing in web
							applications, mobile apps, and custom software solutions. We
							transform your ideas into powerful digital experiences.
						</p>
						<div className="space-y-2">
							{contacts.map((contact, index) => (
								<div className="flex items-center text-gray-600" key={index}>
									{contact.icon}
									<span>{contact.title}</span>
								</div>
							))}
						</div>
					</div>
					<div>
						<h4 className="font-semibold mb-4">Services</h4>
						<ul className="space-y-2">
							{services.map((service, index) => (
								<li key={index}>
									<a
										href={service.link}
										className="text-gray-600 hover:text-blue-500 transition-colors"
									>
										{service.title}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h4 className="font-semibold mb-4">Company</h4>
						<ul className="space-y-2">
							{links.map((contact, index) => (
								<li key={index}>
									<a
										href={contact.link}
										className="text-gray-600 hover:text-blue-500 transition-colors"
									>
										{contact.title}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="border-t border-gray-900  mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
					<div className="text-gray-600 text-sm">
						© 2025 Ajaix. All rights reserved.
					</div>
					<div className="flex space-x-6 mt-4 md:mt-0">
						{socialMedia.map((media, index) => (
							<a
								href={media.link}
								className="text-gray-600 hover:text-blue-600 transition-colors"
								key={index}
							>
								{media.icon}
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
