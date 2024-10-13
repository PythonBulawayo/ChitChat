import React from "react";
import { LuHash } from "react-icons/lu";
import { Link } from "react-router-dom";

const trending = ["Django", "Pycon Zimbabwe", "Flusk", "AWS"];

const Trending = () => {
	return (
		<>
			{trending.map((item, i) => (
				<div className="px-4 flex flex-col space-y-2" key={i}>
					<Link to="/" className="flex items-center pt-4">
						<LuHash />
						<p className=" text-md">{item}</p>
					</Link>
				</div>
			))}
		</>
	);
};

export default Trending;
