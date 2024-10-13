import React from "react";
import { SlOptionsVertical } from "react-icons/sl";
import TobJobCard from "../common/TobJobCard";

const TopJobs = () => {
	return (
		<div className="border-2 border-gray-100 bg-white">
			<div className="flex justify-between items-center border-b-2 border-gray-100 p-4">
				<h2>Suggested</h2>
				<button
					onClick={() => {
						//!TODO implement a dropdown
					}}
				>
					<SlOptionsVertical />
				</button>
			</div>
            <TobJobCard/>
		</div>
	);
};

export default TopJobs;
