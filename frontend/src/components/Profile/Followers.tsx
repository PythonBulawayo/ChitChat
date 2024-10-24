import React from "react";
import useFetchProfileDetails from "../../hooks/profile/useFetchProfileDetails";
import FollowerSkeletonLoader from "./Loaders/FollowerSkeletonLoader";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import { FaUser } from "react-icons/fa";

interface FollowersProps {
	id: number;
}

const Followers: React.FC<FollowersProps> = ({ id }) => {
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
		return <div className="text-red-500 p-4 rounded-xl">Error: {error}</div>;
	}
    

	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">Followers</h2>
			<ul className="list-none p-0 w-full flex flex-wrap gap-2">
				{userProfileData?.followers?.map((follower) => (
					<li
						key={follower.url}
						className="bg-gray-100 p-2 mb-2 border rounded flex w-3/4 md:w-1/3 items-center justify-between"
					>
                        <span className="flex gap-2 items-center">
                           <FaUser size={17} color="red"/>
                          <p className="text-black">{follower.username} </p>	 
                        </span>
						<Button
							onClick={() => handleViewProfile(follower.url)}
						>View</Button>
					</li>
				)) || <p>No followers found.</p>}
			</ul>
		</div>
	);
};

export default Followers;
