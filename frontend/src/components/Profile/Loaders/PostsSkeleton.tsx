import React from "react";

const PostsSkeletonLoader = () => {
	return (
		<div className="mb-4 animate-pulse">
			<h3 className="text-xl font-semibold mb-2 bg-gray-300 h-6 w-1/3"></h3>
			<ul className="list-none p-0">
				{Array.from({ length: 3 }).map((_, index) => (
					<li
						className="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-4 max-w-md md:max-w-2xl"
						key={index}
					>
						<div className="flex items-start px-4 py-6">
							<div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
							<div className="flex-1">
								<div className="flex items-center justify-between mb-2">
									<div className="bg-gray-300 h-4 w-1/3"></div>
									<div className="bg-gray-300 h-4 w-1/4"></div>
								</div>
								<div className="bg-gray-300 h-4 w-full mb-2"></div>
								<div className="bg-gray-300 h-4 w-5/6"></div>
								<div className="mt-4 flex items-center">
									<div className="bg-gray-300 h-4 w-6 mr-2"></div>
									<div className="bg-gray-300 h-4 w-6 mr-2"></div>
									<div className="bg-gray-300 h-4 w-6"></div>
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PostsSkeletonLoader;
