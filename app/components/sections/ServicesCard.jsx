"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ServicesCard = ({ service }) => {
  const { title, icon, featured, link = "#" } = service;

  return (
    <Link
      href={link}
      className={`group relative block rounded-xl p-6 border transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500
        ${
          featured
            ? "bg-white text-gray-900 hover:bg-[#0F172A] hover:text-white"
            : "bg-white text-gray-900 hover:bg-[#0F172A] hover:text-white"
        }
      `}
    >
      {/* Icon */}
      <div
        className={`w-11 h-11 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300
          ${
            featured
              ? "bg-blue-100 group-hover:bg-blue-100"
              : "bg-blue-100 group-hover:bg-blue-100"
          }
        `}
      >
        {/* force icon color */}
        <span className="group-hover:text-white transition-colors">
          {icon}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold leading-snug pr-8">
        {title}
      </h3>
          
      {/* Arrow */}
      <span
        className={`absolute bottom-5 right-5 w-9 h-9 rounded-md flex items-center justify-center transition-all duration-300
          ${
            featured
              ? "bg-blue-600 group-hover:bg-blue-500"
              : "bg-blue-600 group-hover:bg-blue-500"
          }
        `}
      >
        <ArrowUpRight className="w-4 h-4 text-white" />
      </span>
    </Link>
  );
};

export default ServicesCard;
