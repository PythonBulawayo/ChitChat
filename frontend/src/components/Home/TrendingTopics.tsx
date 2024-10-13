import React from "react";
import { SlOptionsVertical } from "react-icons/sl";
import Trending from "../common/Trending";

const TrendingTopic = () => {
	return (
		<div className="border-2 border-gray-100 bg-white w-full">
			<div className="flex justify-between items-center border-b-2 border-gray-100 p-4">
				<h2>Trending topics</h2>
				<button
					onClick={() => {
						//!TODO implement a dropdown
					}}
				>
					<SlOptionsVertical />
				</button>
			</div>
			<Trending />
		</div>
	);
};

export default TrendingTopic;
