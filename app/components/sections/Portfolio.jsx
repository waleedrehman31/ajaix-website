"use client";

import React, { useState } from "react";
import PortfolioTabs from "./PortfolioTabs";
import PortfolioGrid from "./PortfolioGrid";

const portfolioData = {
  Web: [
    // "/portfolio/e1.png",
    // "/portfolio/e2.png",
    // "/portfolio/e3.png",
    // "/portfolio/e4.png",
    // "/portfolio/e5.png",
    // "/portfolio/e6.png",
    // "/portfolio/e7.png", 
    // "/portfolio/e8.png",
  ],
  App: [
    // "/portfolio/w1.png",
    // "/portfolio/w2.png",
    // "/portfolio/w3.png",
    // "/portfolio/w4.png",
    // "/portfolio/w5.png",
    // "/portfolio/w6.png",
    // "/portfolio/w7.png",
    // "/portfolio/w8.png",
  ],
  Brandings: [
    // "/portfolio/g1.png",
    // "/portfolio/g2.png",
    // "/portfolio/g3.png",
    // "/portfolio/g4.png",
    // "/portfolio/g5.png",
    // "/portfolio/g6.png",
    // "/portfolio/g7.png",
    // "/portfolio/g8.png",
  ],
  Iot: [
    // "/portfolio/g1.png",
    // "/portfolio/g2.png",
    // "/portfolio/g3.png",
    // "/portfolio/g4.png",
    // "/portfolio/g5.png",
    // "/portfolio/g6.png",
    // "/portfolio/g7.png",
    // "/portfolio/g8.png",
  ],
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("Web");

  return (
    <section className="py-20 bg-[#E8E9FE]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Our Portfolio
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* Left Tabs */}
          <PortfolioTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {/* Right Grid */}
          <div className="lg:col-span-3">
            <PortfolioGrid images={portfolioData[activeTab]} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
