import React from "react";
import CreatePost from "./CreatePost";
import Post from "../common/Post";

const MainCanvas = () => {
	return (
		<div className="w-full flex flex-col space-y-5">
			<CreatePost />
			<Post />
	
		</div>
	);
};

export default MainCanvas;
