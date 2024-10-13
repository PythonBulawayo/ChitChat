import React from "react";
import { images } from "../../constants";

const RightSIdeBar = () => {
	return (
		<div className="w-full shadow-lg">
			<div className="flex flex-col space-y-3 items-center justify-center p-2">
				<img
					src={images.chitchatlogo}
					alt="logo"
					className="object-fill h-[10rem]"
				/>
				<h1 className="text-xl font-bold text-center">
					Connect with other developers
				</h1>
				<p className="text-base font-normal text-center text-subheading-100">
					Share news, updates, trending topics with other developers
				</p>
			</div>
			<div className="border-t-2 border-gray-100 w-full flex items-center justify-center p-4">
				{/*	TODO link with external page to display more information */}
				<a className="text-primary-500" href="/">
					Learn more
				</a>
			</div>
		</div>
	);
};

export default RightSIdeBar;
