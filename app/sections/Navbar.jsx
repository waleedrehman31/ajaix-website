"use client";
import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [servicesOpen, setServicesOpen] = useState(false);

	const toggleMenu = () => setMenuOpen(!menuOpen);

	return (
		<nav className="sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
				<div className="py-2 px-10 bg-white/20 backdrop-blur-2xl border border-white/40 shadow-lg rounded-full flex justify-between items-center transition-all duration-300 hover:shadow-2xl">
					{/* Logo */}
					<a href="/">
						<img src="/3.png" alt="AJAIX Logo" className="w-28" />
					</a>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center space-x-8 font-medium text-gray-800">
						<a href="#" className="relative group">
							<span className="transition-colors group-hover:text-blue-700">
								Home
							</span>
							<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-700 transition-all group-hover:w-full"></span>
						</a>

						<a href="#" className="relative group">
							<span className="transition-colors group-hover:text-blue-700">
								About Us
							</span>
							<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-700 transition-all group-hover:w-full"></span>
						</a>

						{/* Services Dropdown */}
						<div
							className="relative group"
							onMouseEnter={() => setServicesOpen(true)}
							onMouseLeave={() => setServicesOpen(false)}
						>
							<button className="flex items-center hover:text-blue-700 transition-colors">
								Services
								<ChevronDown
									className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${
										servicesOpen ? "rotate-180" : ""
									}`}
								/>
							</button>

							{/* Dropdown */}
							<div
								className={`absolute left-0 mt-3 w-56 bg-white/60 backdrop-blur-2xl rounded-xl shadow-xl border border-white/40 overflow-hidden transition-all duration-300 ${
									servicesOpen
										? "opacity-100 translate-y-0 visible"
										: "opacity-0 -translate-y-2 invisible"
								}`}
							>
								{[
									"Web Development",
									"App Development",
									"Graphic Designing",
									"Video Editing",
								].map((item) => (
									<a
										key={item}
										href="#"
										className="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-200"
									>
										{item}
									</a>
								))}
							</div>
						</div>

						<a href="#" className="relative group">
							<span className="transition-colors group-hover:text-blue-700">
								Portfolio
							</span>
							<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-700 transition-all group-hover:w-full"></span>
						</a>

						<a href="#" className="relative group">
							<span className="transition-colors group-hover:text-blue-700">
								Testimonials
							</span>
							<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-700 transition-all group-hover:w-full"></span>
						</a>
					</div>

					{/* CTA Button */}
					<div className="hidden md:block">
						<a
							href="#"
							className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
						>
							Free Consultation
						</a>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={toggleMenu}
						className="md:hidden text-gray-800 focus:outline-none"
					>
						{menuOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>
			</div>

			{/* Mobile Dropdown */}
			<div
				className={`md:hidden bg-white/90 backdrop-blur-2xl border-t border-gray-200 shadow-lg transition-all duration-500 overflow-hidden ${
					menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
				}`}
			>
				<div className="px-6 pb-4 pt-2 space-y-3">
					{["Home", "About Us"].map((item) => (
						<a
							key={item}
							href="#"
							className="block py-2 text-gray-800 hover:text-blue-700 transition"
						>
							{item}
						</a>
					))}

					{/* Collapsible Services */}
					<div>
						<button
							onClick={() => setServicesOpen(!servicesOpen)}
							className="flex justify-between w-full py-2 text-gray-800 hover:text-blue-700 transition"
						>
							Services
							<ChevronDown
								className={`w-4 h-4 transform transition-transform duration-300 ${
									servicesOpen ? "rotate-180" : ""
								}`}
							/>
						</button>
						<div
							className={`pl-4 space-y-1 transition-all duration-300 ${
								servicesOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
							}`}
						>
							{[
								"Web Development",
								"App Development",
								"Graphic Designing",
								"Video Editing",
							].map((service) => (
								<a
									key={service}
									href="#"
									className="block py-1 text-sm text-gray-700 hover:text-blue-700"
								>
									{service}
								</a>
							))}
						</div>
					</div>

					{["Portfolio", "Testimonials"].map((item) => (
						<a
							key={item}
							href="#"
							className="block py-2 text-gray-800 hover:text-blue-700"
						>
							{item}
						</a>
					))}

					<a
						href="#"
						className="block mt-4 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-2 rounded-full hover:scale-105 hover:shadow-lg transition-all"
					>
						Free Consultation
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
