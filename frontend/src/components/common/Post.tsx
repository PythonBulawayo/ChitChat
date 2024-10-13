import React from "react";
import { images } from "../../constants";
import { formatPostDate } from "../../../utils/dateFormaters";
import TechSTack from "./TechSTack";
import { AiOutlineLike } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { FaRegCommentAlt } from "react-icons/fa";

const techSTack = ["HTML", "React", "PHP", "Laravel"];

const Post = () => {
	const createdAt = "21-01-2024";
	const title = "Seniour wedpress developer";
	const price = "$30/hr";
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
					<p className="text-sm font-bold">Jessica William</p>
					<p className="text-xs">{formatPostDate(createdAt)}</p>
				</div>
			</div>
			<div className="my-2">
				<p className="font-bold">{title}</p>
				<div className="flex gap-2 my-2 items-center">
					<div className="bg-blue-500 p-1 text-white">Full Time</div>
					<p className="font-bold">{price}</p>
				</div>
				<p className="text-subheading-100 text-sm">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
					similique neque! Atque autem quibusdam, mollitia vero ea sequi nisi
					voluptatibus iste, provident corrupti eligendi cupiditate accusamus
					nesciunt, eum corporis harum.
				</p>
				<div className="flex flex-wrap my-4 gap-2">
					{techSTack.map((_, i) => (
						<TechSTack key={i} title={_} />
					))}
				</div>
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
