import axios from "axios";
import { useEffect, useState } from "react";
import { Post } from "../../../utils/types";

const useFetchProfilePosts = (profileUrl: string) => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchPosts = async () => {
			setIsLoading(true);
			try {
				const response = await axios.get(
					`${import.meta.env.VITE_API_BASE_URL}/posts`
				);
				// Filter posts where the user_profile matches the current profile
				const filteredPosts = response.data.filter(
					(post: Post) => post.user_profile === profileUrl
				);
				setPosts(filteredPosts);
			} catch (error) {
				setError("Error fetching posts");
			} finally {
				setIsLoading(false);
			}
		};
		fetchPosts();
	}, [profileUrl]);

	return { posts, isLoading, error };
};

export default useFetchProfilePosts;