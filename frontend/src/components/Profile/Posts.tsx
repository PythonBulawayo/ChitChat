import React from "react";
import useFetchProfileDetails from "../../hooks/profile/useFetchProfileDetails";
import useFetchProfilePosts from "../../hooks/profile/useFetchPosts";
import PostsSkeletonLoader from "./Loaders/PostsSkeleton";

interface PostsProps {
	id: number;
}

const Posts: React.FC<PostsProps> = ({ id }) => {
	const {
		userProfileData,
		isLoading: profileLoading,
		error: profileError,
	} = useFetchProfileDetails(id);
	const {
		posts,
		isLoading: postsLoading,
		error: postsError,
	} = useFetchProfilePosts(userProfileData?.url || "");

	const profilePicture = userProfileData?.profile_picture;

	if (profileLoading || postsLoading) {
		return <PostsSkeletonLoader />;
	}

	if (profileError || postsError) {
		return <div>Error: {profileError || postsError}</div>;
	}

	return (
		<div className="mb-4">
			<h2 className="text-2xl font-bold mb-4">Posts</h2>
			<ul className="list-none p-0 ">
				{posts?.map((post) => (
					<li
						className="flex bg-white hover:shadow-xl hover:scale-105 duration-500 shadow-lg rounded-lg mx-4 md:mx-auto my-4 max-w-md md:max-w-2xl"
						key={post.id}
					>
						<div className="flex flex-wrap items-start px-4 py-6">
							<img
								className="w-12 h-12 rounded-full object-cover mr-4 shadow"
								src={
									profilePicture ||
									"https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
								}
								alt="avatar"
							/>
							<div>
								<div className="flex w-full items-center gap-12 md:gap-24">
									<h2 className="text-lg text-start font-semibold text-gray-900 -mt-1">
										{userProfileData?.user}
									</h2>
									<p className="text-xs text-end md:text-sm text-gray-700">
										{new Date(post.created_at).toLocaleString()}
									</p>
								</div>
								<p className="mt-3 text-gray-700 text-sm">{post.body}</p>
								<div className="mt-4 flex items-center">
									<div className="flex  text-gray-700 text-sm mr-3">
										<svg
											fill="none"
											viewBox="0 0 24 24"
											className="w-4 h-4 mr-1"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
											/>
										</svg>
										<span>{post.likes_count}</span>
									</div>
									<div className="flex  text-gray-700 text-sm mr-8">
										<svg
											fill="none"
											viewBox="0 0 24 24"
											className="w-4 h-4 mr-1"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
											/>
										</svg>
										<span>Comments</span>
									</div>
									<div className="flex text-gray-700 text-sm mr-4">
										<svg
											fill="none"
											viewBox="0 0 24 24"
											className="w-4 h-4 mr-1"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
											/>
										</svg>
										<span>Share</span>
									</div>
								</div>
							</div>
						</div>
					</li>
				)) || <p>No posts available.</p>}
			</ul>
		</div>
	);
};

export default Posts;
