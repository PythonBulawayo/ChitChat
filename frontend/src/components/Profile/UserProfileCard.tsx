import React from "react";
import useFetchProfileDetails from "../../hooks/profile/useFetchProfileDetails";
import { images } from "../../constants";
import ProfileSkeletonLoader from "./Loaders/ProfileSkeletonLoader";
import { FaUser, FaUserFriends } from "react-icons/fa";

interface UserProfileCardProps {
	id: number;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ id }) => {
	const { isLoading, userProfileData, error, fetchProfileDetails } =
		useFetchProfileDetails(id);

	const userFirstName = userProfileData?.first_name;
	const userLastName = userProfileData?.last_name;
	const realname = `${userFirstName} ${userLastName}`;
	const userProfilePicture = userProfileData?.profile_picture;
	const numberOfFollowers = userProfileData?.followers.length;
	const numberOfFollowing = userProfileData?.follows.length;
	const username = userProfileData?.user;

	if (isLoading) {
		return <ProfileSkeletonLoader />;
	}
	return (
		<div>
<div className="flex flex-row flex-wrap w-full items-center border-b gap-4 py-4 mb-4">
				<img
					src={userProfilePicture || images.profilePicture}
					alt="Profile"
					className="w-20 h-20 rounded-full mr-4"
				/>

				<div className="flex gap-2 w-full flex-col justify-start items-start">
					<h2 className="text-2xl font-semibold">{username}</h2>
					<div className="flex items-start gap-10 w-full">
						<span className="flex items-center gap-2 justify-start">
							<span className="text-red-500">
								<FaUser size={15} />
							</span>
							<p className=" text-black align-text-bottom leading-none my-0 py-0">
								Followers {numberOfFollowers}{" "}
							</p>
						</span>
						<span className="flex items-center gap-2 justify-start">
							<span className="text-red-500">
								<FaUserFriends size={18} />
							</span>

							<p className="text-black align-text-bottom leading-none my-0 py-0">
								Following {numberOfFollowing}{" "}
							</p>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserProfileCard;
