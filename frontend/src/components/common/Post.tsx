import React from "react";
import { images } from "../../constants";
import { formatPostDate } from "../../../utils/dateFormaters";
import TechSTack from "./TechSTack";
import { AiOutlineLike } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { FaRegCommentAlt } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";

const techSTack = ["HTML", "React", "PHP", "Laravel"];

const Post = () => {
	const createdAt = "21-01-2024";
	const numberoflIkes = 30;
	return (
		<div className="w-full border-2 border-gray-100 p-4 shadow-md">
			<div className="h-10 flex gap-2">
				<img
					src={images.userProfile}
					alt="user profile"
					className="object-fill h-8"
				/>
				<div className="flex flex-col">
					<div className="flex flex-row items-center justify-between">
						<span className="text-sm font-bold">Jessica William</span>
						<button
							onClick={() => {
								//!TODO implement a dropdown for edit, delete and share options
							}}
							className="ml-auto"
						>
							<SlOptionsVertical />
						</button>
					</div>
					<p className="text-xs">{formatPostDate(createdAt)}</p>
				</div>

			</div>
			<div className="my-2">
				<p className="text-subheading-100 text-sm">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
					similique neque! Atque autem quibusdam, mollitia vero ea sequi nisi
					voluptatibus iste, provident corrupti eligendi cupiditate accusamus
					nesciunt, eum corporis harum.
				</p>
			</div>
			<div className="border-t-2 border-gray-200 my-3"></div>
			<div className="flex justify-between items-center">
				<button className="flex items-center justify-center gap-2">
					<AiOutlineLike className="h-4 w-4" />
					<p>{numberoflIkes}</p>
				</button>
				<button className="flex items-center justify-center gap-2">
					<FaRegCommentAlt className="h-4 w-4" />
					<p>{numberoflIkes}</p>
				</button>
				<button className="flex items-center justify-center gap-2">
					<GrView className="h-4 w-4" />
					<p>{numberoflIkes}</p>
				</button>
			</div>
		</div>
	);
};

export default Post;
