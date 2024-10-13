import React from "react";
import { images } from "../../constants";
import { CiSquarePlus } from "react-icons/ci";

const UserFollow = () => {
	return (
		<div className="flex justify-between items-center mt-2 border-t-2 border-gray-100 px-4 py-2">
			<div className="h-10 flex gap-2">
				<img
					src={images.userProfile}
					alt="user profile"
					className="object-fill h-8"
				/>
				<div className="flex flex-col">
					<p className="text-sm font-bold">Jessica William</p>
					<p className="text-xs">Graphics designer</p>
				</div>
			</div>
			<button
				onClick={() => {
					//!TODO implement follow functionality
				}}
			>
				<CiSquarePlus className="h-8 w-8" />
			</button>
		</div>
	);
};

export default UserFollow;
