import React from "react";
import { images } from "../../constants";

const CreatePost = () => {
	return (
		<div className="p-4 w-full border-t-4 border-t-primary-500 border-r-2 border-l-2 border-b-2 border-gray-100 flex justify-between">
			<div className="md:w-[4rem] md:h-[4rem] h-[4rem] w-[4rem] rounded-full border-4 border-white flex items-center justify-between">
				<img src={images.userProfile} alt="profile" className="object-fill" />
			</div>
			<div className="flex gap-3 items-center">
				<button
					className="p-2 bg-gray-300"
					onClick={() => {
						//!TODO add create project feature
					}}
				>
					Post a Project
				</button>
				<button
					className="p-2 bg-primary-500 text-white"
					onClick={() => {
						//!TODO add create job feature
					}}
				>
					Post a Job
				</button>
			</div>
		</div>
	);
};

export default CreatePost;
