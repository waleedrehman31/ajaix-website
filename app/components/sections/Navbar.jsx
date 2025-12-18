"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-6 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md rounded-full" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <Image
            src="/3.png"
            alt="Ajaix Logo"
            width={110}
            height={32}
            className="object-contain"
            priority
          />

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#home" className="hover:text-black">Home</a>
            <a href="#about" className="hover:text-black">About Us</a>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-black">
                Services <ChevronDown size={16} />
              </button>

              <div className="absolute top-full left-0 mt-3 w-56 rounded-xl bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <ul className="py-3 text-sm text-gray-700">
                  <li>
                    <a href="#services" className="block px-5 py-2 hover:bg-gray-100">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="block px-5 py-2 hover:bg-gray-100">
                      App Development
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="block px-5 py-2 hover:bg-gray-100">
                      Graphic Design
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="block px-5 py-2 hover:bg-gray-100">
                      Video Editing
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <a href="#portfolio" className="hover:text-black">Portfolio</a>
            <a href="#testimonials" className="hover:text-black">Testimonials</a>
          </nav>

          {/* Desktop Contact Button */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              className="flex items-center gap-1 rounded-full bg-black text-white px-6 py-2 text-sm hover:bg-gray-800 transition"
            >
              Contact Us
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden block text-gray-900 z-[101]"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 rounded-2xl bg-white shadow-lg p-5 space-y-4 text-sm font-medium text-gray-700">
            <a href="#home" className="block">Home</a>
            <a href="#about" className="block">About Us</a>

            {/* Mobile Services */}
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full"
            >
              Services <ChevronDown size={16} />
            </button>

            {servicesOpen && (
              <div className="pl-4 space-y-2 text-gray-600">
                <a href="#services" className="block">Web Development</a>
                <a href="#services" className="block">App Development</a>
                <a href="#services" className="block">Graphic Design</a>
                <a href="#services" className="block">Video Editing</a>
              </div>
            )}

            <a href="#portfolio" className="block">Portfolio</a>
            <a href="#testimonials" className="block">Testimonials</a>

            <a
              href="#contact"
              className="flex items-center justify-center gap-1 rounded-full bg-black text-white px-6 py-2 mt-4"
            >
              Contact Us
              <ArrowUpRight size={14} />
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
