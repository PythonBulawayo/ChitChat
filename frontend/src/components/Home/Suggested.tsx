import React from "react";
import { SlOptionsVertical } from "react-icons/sl";

import UserFollow from "../common/UserFollow";

const Suggested = () => {
	return (
		<div className="w-full border-2 border-gray-100 ">
			<div className="flex justify-between items-center p-4">
				<h2>Suggested</h2>
				<button
					onClick={() => {
						//!TODO implement a dropdown
					}}
				>
					<SlOptionsVertical />
				</button>
			</div>
			<UserFollow />
			<UserFollow />
			<UserFollow />
		</div>
	);
};

export default Suggested;
