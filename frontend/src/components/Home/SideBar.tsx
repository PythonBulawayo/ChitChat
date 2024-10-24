import React from "react";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import useFetchProfileDetails from "../../hooks/profile/useFetchProfileDetails";
import SkeletonLoader from "../Profile/Loaders/HomeProfileSkeleton";

const SideBar = () => {
	const id = 6;
	const { isLoading, userProfileData, error, fetchProfileDetails } =useFetchProfileDetails(id)

	const userFirstName = userProfileData?.first_name;
	const userLastName = userProfileData?.last_name;
	const realname = `${userFirstName} ${userLastName}`;
	const userProfilePicture = userProfileData?.profile_picture;
	const numberOfFollowers = userProfileData?.followers.length;
	const numberOfFollowing = userProfileData?.follows.length;
	const username = userProfileData?.user;

	if(isLoading){
		return <SkeletonLoader/>
	}

	return (
		<div className="w-full border-2 border-gray-100 h-fit">
			<div className="w-full relative h-[16rem] border-gray-100 border-b-2">
				<div className="bg-primary-500 w-full h-[8rem]"></div>
				<div className="w-full absolute top-[11rem] flex flex-col justify-center">
					<h1 className="text-xl font-bold text-center">{username}</h1>
				</div>
				<div className="md:w-[6rem] md:h-[6rem] h-[3rem] w-[3rem] rounded-full absolute top-20 left-1/2 transform -translate-x-1/2 lg:left-[2rem] xl:left-[6rem]  md:translate-x-0 border-4 border-white flex items-center justify-center">
					<img
						src={userProfilePicture || images.profilePicture}
						alt="profile"
						className="object-cover w-full h-full rounded-full"
					/>
				</div>
			</div>
			<div className="w-full p-4  border-gray-100 border-b-2">
				<h1 className="text-xl font-bold text-center text-subheading-100">
					Following
				</h1>
				<p className="text-base font-normal text-center">{numberOfFollowers}</p>
			</div>
			<div className="w-full p-4  border-gray-100 border-b-2">
				<h1 className="text-xl font-bold text-center text-subheading-100">
					Followers
				</h1>
				<p className="text-base font-normal text-center">{numberOfFollowing}</p>
			</div>
			<div className="w-full p-4 flex justify-center">
				<a
					href={`/profile/${id}`}
					className="text-base font-normal text-center text-primary-400"
				>
					View Profile
				</a>
			</div>
		</div>
	);
};

export default SideBar;
