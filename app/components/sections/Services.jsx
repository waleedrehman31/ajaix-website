import React from "react";
import ServicesCard from "./ServicesCard";
import Link from "next/link";

import {
  Code,
  Smartphone,
  Settings,
  Palette,
  Cloud,
  ChartColumn,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    icon: <Code className="w-5 h-5 text-blue-600" />,
    featured: true,
    link: "/services/web-development",
  },
  {
    title: "Mobile App Development",
    icon: <Smartphone className="w-5 h-5 text-blue-600" />,
    link: "/services/mobile-app-development",
  },
  {
    title: "Software Consulting",
    icon: <Settings className="w-5 h-5 text-blue-600" />,
    link: "/services/software-consulting",
  },
  {
    title: "UI/UX Design",
    icon: <Palette className="w-5 h-5 text-blue-600" />,
    link: "/services/ui-ux-design",
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5 text-blue-600" />,
    link: "/services/cloud-devops",
  },
  {
    title: "Data Analytics",
    icon: <ChartColumn className="w-5 h-5 text-blue-600" />,
    link: "/services/data-analytics",
  },
];

const Services = () => {
  return (
    <section className="bg-[#E8E9FE] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-sm font-semibold text-blue-600 mb-3">
            Services We Offer
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            From concept to deployment, we provide end-to-end software development
            services that help businesses thrive in the digital landscape.
          </h2>
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServicesCard key={index} service={service} />
          ))}
        </div>

      </div>

	  <div className="mt-10 text-center">
		<p className="text-gray-600 mb-6">
			Don&apos;t see what you&apos;re looking for? We offer custom solutions
			tailored to your specific needs.
		</p>

		<Link
			href="/contact"
			className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-8 py-3 text-sm font-semibold text-white
					transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
		>
			Discuss Your Project
		</Link>
	   </div>
    </section>
  );
};

export default Services;
