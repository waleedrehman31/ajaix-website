import React from "react";

const Badge = ({ content }) => {
  return (
    <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 overflow-hidden border-transparent bg-blue-100 hover:bg-blue-200 text-blue-700 shadow-sm">
      {content}
    </span>
  );
};

export default Badge;
