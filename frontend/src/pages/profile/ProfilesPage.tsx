import React from "react";
import UserProfileCard from "../../components/Profile/UserProfileCard";
import Followers from "../../components/Profile/Followers";
import Following from "../../components/Profile/Following";
import Posts from "../../components/Profile/Posts";
import { useParams } from "react-router-dom";

interface ProfilesPageProps {
	id: number;
}

const ProfilesPage: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const numericId = Number(id);
	return (
		<div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-lg">
			<UserProfileCard id={numericId} />
			<Followers id={numericId} />
			<Following id={numericId} />
			<Posts id={numericId} />
		</div>
	);
};

export default ProfilesPage;
