import React from "react";
import useFetchProfileDetails from "../../hooks/profile/useFetchProfileDetails";
import FollowerSkeletonLoader from "./Loaders/FollowerSkeletonLoader";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import { FaUserCircle } from "react-icons/fa";

interface FollowingProps {
	id: number;
}

const Following: React.FC<FollowingProps> = ({ id }) => {
    const navigate = useNavigate();
     const handleViewProfile = (url: string) => {
				const match = url.match(/\/profiles\/(\d+)\//);
				if (match) {
					const id = match[1];
					navigate(`/profile/${id}`);
				}
			};
	const { isLoading, userProfileData, error } = useFetchProfileDetails(id);

	if (isLoading) {
		return <FollowerSkeletonLoader />;
	}

	if (error) {
		return <div className="text-red-500">Error: {error}</div>;
	}

	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">Following</h2>
			<ul className="list-none p-0 w-full flex flex-wrap gap-2">
				{userProfileData?.follows?.map((following) => (
					<li
						key={following.url}
						className="bg-gray-100 p-2 mb-2 border rounded flex w-3/4 md:w-1/3 items-center justify-between"
					>
						<span className="flex gap-2 items-center">
							<FaUserCircle size={20} color="red" />
							<p className="text-black align-middle leading-none my-0 py-0">{following.username}</p>
						</span>
						<Button
							onClick={() => handleViewProfile(following.url)}
						>
							View
						</Button>
					</li>
				)) || <p>No following found.</p>}
			</ul>
		</div>
	);
};

export default Following;
