"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const tabs = [
  { id: "Web", label: "Web Development" },
  { id: "App", label: "App Development" },
  { id: "Iot", label: "Internet Of Things" },
  { id: "Brandings", label: "Brandings" },
];

const PortfolioTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="space-y-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center gap-2 text-left w-full transition ${
            activeTab === tab.id
              ? "text-blue-600 font-semibold"
              : "text-gray-600 hover:text-blue-600"
          }`}
        >
          {tab.label}
          {activeTab === tab.id && <ArrowRight size={16} />}
        </button>
      ))}
    </div>
  );
};

export default PortfolioTabs;
 