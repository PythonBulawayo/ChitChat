import React from "react";

const FollowerSkeletonLoader = () => {
	return (
		<li className="bg-gray-100 p-2 mb-2 border rounded animate-pulse">
			<div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
			<div className="h-4 bg-gray-300 rounded w-1/2"></div>
		</li>
	);
};

export default FollowerSkeletonLoader;
