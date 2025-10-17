import React from "react";

const StatsCard = ({ state }) => {
	return (
		<div className="flex flex-col gap-6 rounded-xl text-center border-0 bg-white shadow-md hover:shadow-lg transition-shadow">
			<div className="p-6">
				<div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
					{state.icon}
				</div>
				<h4 className="text-3xl font-bold text-gray-900 mb-1">{state.count}</h4>
				<p className="text-gray-600">{state.title}</p>
			</div>
		</div>
	);
};

export default StatsCard;
