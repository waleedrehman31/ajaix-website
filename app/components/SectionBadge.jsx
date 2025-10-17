import React from "react";

const SectionBadge = ({ content }) => {
	return (
		<div className="w-fit inline-flex  mb-4 text-blue-700 py-1 px-3 text-xs font-semibold rounded-full bg-gradient-to-l from-violet-300 to-blue-200">
			{content}
		</div>
	);
};

export default SectionBadge;
