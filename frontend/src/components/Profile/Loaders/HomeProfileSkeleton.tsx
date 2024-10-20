import React from "react";

const SkeletonLoader = () => {
	return (
		<div className="w-full border-2 border-gray-100 h-fit animate-pulse">
			<div className="w-full relative h-[16rem] border-gray-100 border-b-2">
				<div className="bg-gray-300 w-full h-[8rem]"></div>
				<div className="w-full absolute top-[11rem] flex flex-col justify-center">
					<div className="bg-gray-300 h-6 w-1/2 mx-auto mb-2"></div>
				</div>
				<div className="md:w-[6rem] md:h-[6rem] h-[3rem] w-[3rem] rounded-full absolute top-20 left-1/2 transform -translate-x-1/2 lg:left-[2rem] xl:left-[6rem] md:translate-x-0 border-4 border-white flex items-center justify-center">
					<div className="bg-gray-300 w-full h-full rounded-full"></div>
				</div>
			</div>
			<div className="w-full p-4 border-gray-100 border-b-2">
				<div className="bg-gray-300 h-6 w-1/3 mx-auto mb-2"></div>
				<div className="bg-gray-300 h-4 w-1/4 mx-auto"></div>
			</div>
			<div className="w-full p-4 border-gray-100 border-b-2">
				<div className="bg-gray-300 h-6 w-1/3 mx-auto mb-2"></div>
				<div className="bg-gray-300 h-4 w-1/4 mx-auto"></div>
			</div>
			<div className="w-full p-4 flex justify-center">
				<div className="bg-gray-300 h-4 w-1/4"></div>
			</div>
		</div>
	);
};

export default SkeletonLoader;
