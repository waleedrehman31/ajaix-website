import React from "react";
import Image from "next/image";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#E8E9FE] ">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

  {/* LEFT: Brand */}
  <div className="md:col-span-1">
    <Image
      src="/3.png"
      alt="Ajaix Logo"
      width={110}
      height={32}
      className="object-contain"
      priority
    />
    <p className="text-sm text-gray-600 max-w-xs mt-4">
      A comprehensive technology solutions company delivering modern
      digital products for businesses worldwide.
    </p>

    {/* Social Icons */}
    <div className="flex gap-3 mt-6">
      {[Facebook, Github, Instagram, Linkedin, Twitter, Youtube].map(
        (Icon, index) => (
          <a
            key={index}
            href="#"
            className="w-9 h-9 flex items-center justify-center rounded-md border hover:bg-gray-100 transition"
          >
            <Icon size={16} />
          </a>
        )
      )}
    </div>
  </div>

  {/* RIGHT: Links */}
  <div className="md:col-span-2 flex flex-col sm:flex-row md:gap-48 md:justify-end">

    {/* Resources */}
    <div>
      <h4 className="text-sm font-semibold text-gray-900 mb-4">
        Resources
      </h4>
      <ul className="space-y-3 text-sm text-gray-600">
        <li><a href="#" className="hover:text-black">Blog</a></li>
        <li><a href="#" className="hover:text-black">Help Center</a></li>
        <li><a href="#" className="hover:text-black">Contact Support</a></li>
        <li><a href="#" className="hover:text-black">Community</a></li>
        <li><a href="#" className="hover:text-black">Security</a></li>
      </ul>
    </div>

    {/* Company */}
    <div>
      <h4 className="text-sm font-semibold text-gray-900 mb-4">
        Company
      </h4>
      <ul className="space-y-3 text-sm text-gray-600">
        <li><a href="#" className="hover:text-black">About Us</a></li>
        <li><a href="#" className="hover:text-black">Careers</a></li>
        <li><a href="#" className="hover:text-black">Brand Assets</a></li>
        <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-black">Terms of Service</a></li>
      </ul>
    </div>

  </div>

</div>


        {/* Bottom */}
        <div className="border-t mt-12 pt-6 text-center text-sm text-gray-500">
          © 2025 Ajaix. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
