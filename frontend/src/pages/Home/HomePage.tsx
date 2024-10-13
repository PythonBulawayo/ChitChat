import React from "react";
import SideBar from "../../components/Home/SideBar";
import MainCanvas from "../../components/Home/MainCanvas";
import RightSIdeBar from "../../components/Home/RightSIdeBar";
import Suggested from "../../components/Home/Suggested";

export const Home = () => {
	return (
		<main className="w-full h-full bg-white">
			<div className="flex gap-10 mx-auto w-3/4 h-full mt-10">
				<div className="w-1/3 flex  flex-col space-y-5">
					<SideBar />
					<Suggested />
				</div>
				<MainCanvas />
				<RightSIdeBar />
			</div>
		</main>
	);
};
