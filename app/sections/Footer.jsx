import {
	Facebook,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Phone,
} from "lucide-react";
import React from "react";

const contacts = [
	{
		title: "contact@ajaix.com",
		icon: <Mail className="w-4 h-4 text-blue-600 mr-2" />,
	},
	{
		title: "+92 336 0441222",
		icon: <Phone className="w-4 h-4 text-blue-600 mr-2" />,
	},
	{
		title: "Office No 1, 3rd Floor, Rehman Plaza, Mansehra, Pakistan",
		icon: <MapPin className="w-4 h-4 text-blue-600 mr-2" />,
	},
];

const services = [
	{ title: "Web Development", link: "/services/web-development" },
	{ title: "Mobile App Development", link: "/services/mobile-app-development" },
	{ title: "Software Consulting", link: "/services/software-consulting" },
	{ title: "UI/UX Design", link: "/services/ui-ux-design" },
	{ title: "Cloud & DevOps", link: "/services/cloud-devops" },
	{ title: "Data Analytics", link: "/services/data-analytics" },
];

const links = [
	{ title: "About Us", link: "#about-us" },
	{ title: "Services", link: "#services" },
	{ title: "Contact Us", link: "#contact-us" },
];

const socialMedia = [
	{
		icon: <Facebook className="w-5 h-5" />,
		link: "https://www.facebook.com/profile.php?id=61582740734398",
	},
	{
		icon: <Linkedin className="w-5 h-5" />,
		link: "https://www.linkedin.com/company/ajaix-technologies/",
	},
	{
		icon: <Instagram className="w-5 h-5" />,
		link: "https://www.instagram.com/ajaix_technologies/",
	},
];

const Footer = () => {
	return (
		<footer className="bg-white/30 backdrop-blur-3xl border-t border-white/20">
			<div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-10">
					{/* Company Info */}
					<div className="col-span-1 md:col-span-2">
						<div className="flex items-center mb-4">
							<img src="/3.png" alt="Ajaix Logo" className="w-50 mr-3" />
							{/* <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
								AJAIX
							</h3> */}
						</div>
						<p className="text-gray-700 leading-relaxed mb-6 max-w-md">
							We craft intelligent digital experiences — from web and mobile
							apps to scalable enterprise solutions. Let's build the future
							together.
						</p>
						<div className="space-y-3">
							{contacts.map((contact, index) => (
								<div
									key={index}
									className="flex items-start text-gray-700 hover:text-blue-600 transition-colors"
								>
									{contact.icon}
									<span className="text-sm">{contact.title}</span>
								</div>
							))}
						</div>
					</div>

					{/* Services */}
					<div>
						<h4 className="text-lg font-semibold text-gray-900 mb-4 border-b border-blue-100 pb-2">
							Services
						</h4>
						<ul className="space-y-2">
							{services.map((service, index) => (
								<li key={index}>
									<a
										href={service.link}
										className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm"
									>
										{service.title}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Company */}
					<div>
						<h4 className="text-lg font-semibold text-gray-900 mb-4 border-b border-blue-100 pb-2">
							Company
						</h4>
						<ul className="space-y-2">
							{links.map((link, index) => (
								<li key={index}>
									<a
										href={link.link}
										className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm"
									>
										{link.title}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-600 text-sm text-center md:text-left">
						© {new Date().getFullYear()}{" "}
						<span className="font-semibold text-gray-900">AJAIX</span>. All
						rights reserved.
					</p>
					<div className="flex space-x-5 mt-4 md:mt-0">
						{socialMedia.map((media, index) => (
							<a
								key={index}
								href={media.link}
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-600 hover:text-blue-600 transition-colors duration-200 p-2 rounded-full hover:bg-blue-50"
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
