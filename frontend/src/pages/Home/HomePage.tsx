import React from "react";
import SideBar from "../../components/Home/SideBar";
import MainCanvas from "../../components/Home/MainCanvas";
import RightSIdeBar from "../../components/Home/RightSIdeBar";
import Suggested from "../../components/Home/Suggested";
import TopJobs from "../../components/Home/TopJobs";

export const Home = () => {
	return (
		<main className="w-full h-full bg-white">
			<div className="flex gap-10 mx-auto w-3/4 h-full my-10">
				<div className="w-1/3 flex flex-col space-y-5">
					<SideBar />
					<Suggested />
				</div>
				<div className="w-2/3 flex flex-col space-y-4">
					<MainCanvas />
				</div>
				<div className="flex w-1/3 flex-col space-y-5">
					<RightSIdeBar />
					<TopJobs />
				</div>
			</div>
		</main>
	);
};
