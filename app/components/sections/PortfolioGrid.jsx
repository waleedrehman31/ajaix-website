"use client";

import React from "react";
import Image from "next/image";

const PortfolioGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {images.map((img, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg border transition hover:shadow-lg"
        >
          <Image
            src={img}
            alt="Portfolio item"
            width={300}
            height={200}
            className="w-full h-full object-cover transition duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;
