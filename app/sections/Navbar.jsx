"use client";
import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700 tracking-wide">
          AJAIX
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-gray-800">
          <a href="#" className="hover:text-blue-700 transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-blue-700 transition-colors">
            About Us
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
              className={`absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 origin-top transform transition-all duration-300 ease-out ${
                servicesOpen
                  ? "opacity-100 scale-100 visible"
                  : "opacity-0 scale-95 invisible"
              }`}
            >
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
              >
                Web Development
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
              >
                App Development
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
              >
                Graphic Designing
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
              >
                Video Editing
              </a>
            </div>
          </div>

          <a href="#" className="hover:text-blue-700 transition-colors">
            Portfolio
          </a>
          <a href="#" className="hover:text-blue-700 transition-colors">
            Testimonials
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#"
            className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-sm transition"
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

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 shadow-md transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-4 pt-2 space-y-2 animate-fadeIn">
          <a href="#" className="block py-2 text-gray-800 hover:text-blue-700">
            Home
          </a>
          <a href="#" className="block py-2 text-gray-800 hover:text-blue-700">
            About Us
          </a>

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
              <a
                href="#"
                className="block py-1 text-sm text-gray-700 hover:text-blue-700"
              >
                Web Development
              </a>
              <a
                href="#"
                className="block py-1 text-sm text-gray-700 hover:text-blue-700"
              >
                App Development
              </a>
              <a
                href="#"
                className="block py-1 text-sm text-gray-700 hover:text-blue-700"
              >
                Graphic Designing
              </a>
              <a
                href="#"
                className="block py-1 text-sm text-gray-700 hover:text-blue-700"
              >
                Video Editing
              </a>
            </div>
          </div>

          <a href="#" className="block py-2 text-gray-800 hover:text-blue-700">
            Portfolio
          </a>
          <a href="#" className="block py-2 text-gray-800 hover:text-blue-700">
            Testimonials
          </a>

          <a
            href="#"
            className="block mt-3 text-center bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
          >
            Free Consultation
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
