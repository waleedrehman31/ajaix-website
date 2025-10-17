import { ArrowRightIcon, Code } from "lucide-react";
import React from "react";

const ServicesCard = ({ service }) => {
  return (
    <article className="inline-flex flex-col gap-6 rounded-xl group shadow-md mb-3 hover:shadow-xl transition-all duration-300 border-0 bg-white">
      <div className="grid auto-rows-auto items-start gap-1.5 px-6 pt-6">
        <div className="relative mb-4">
          <img
            src={service.image}
            alt=""
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-md">
            {service.icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{service.description}</p>
      </div>
      <div className="px-6 [&:last-child]:pb-6 pt-0">
        <div className="space-y-3">
          {service.points.map((point, index) => (
            <div
              key={index}
              className="flex items-center text-sm text-gray-600"
            >
              <span className="w-1.5 h-1.5 bg-blue-900 rounded-full mr-2"></span>
              {point}
            </div>
          ))}
          <a
            href={service.link}
            className="inline-flex text-center justify-center gap-2 rounded-md text-sm font-medium h-9 px-2 py-2 w-full transition-all duration-300 border bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
          >
            Learn More
            <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ServicesCard;
