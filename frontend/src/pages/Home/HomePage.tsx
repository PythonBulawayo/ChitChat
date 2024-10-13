import React from "react";
import SideBar from "../../components/Home/SideBar";
import MainCanvas from "../../components/Home/MainCanvas";
import Suggested from "../../components/Home/Suggested";
import TrendingTopic from "../../components/Home/TrendingTopics";

export const Home = () => {
	return (
		<main className="w-full h-full bg-white">
			<div className="flex gap-5 lg:gap-10 mx-auto lg:w-3/4 w-full p-4 h-full my-10">
				<div className="w-1/3 lg:flex flex-col space-y-5 hidden">
					<SideBar />
				</div>
				<div className="md:w-2/3 w-full flex flex-col space-y-4">
					<MainCanvas />
				</div>
				<div className="md:w-1/3 w-full hidden md:block">
					<div className="fixed flex flex-col space-y-5 lg:w-[19rem] w-[14rem]">
						<Suggested />
						<TrendingTopic />
					</div>
				</div>
			</div>
		</main>
	);
};
