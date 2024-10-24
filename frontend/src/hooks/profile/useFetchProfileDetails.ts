import { useEffect, useState, useCallback } from "react";
import { UserProfile } from "../../../utils/types";
import axios from "axios";
import encodeCredentials from "../../../utils/credentialsencoder";

const useFetchProfileDetails = (id: number) => {
	const [userProfileData, setUserProfileData] = useState<UserProfile | null>(
		null
	);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const BASE_URL = import.meta.env.VITE_API_BASE_URL;
	const username = "chitchat-test";
	const password = "7lBeZIE=";
	const credentials = encodeCredentials(username, password);

	const fetchProfileDetails = useCallback(async () => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await axios.get<UserProfile>(
				`${BASE_URL}/profiles/${id}`,
				{
					headers: {
						Authorization: `Basic ${credentials}`,
					},
				}
			);
			setUserProfileData(response?.data);

		} catch (error) {
			setError("Failed to fetch profile details. Try again later!");
		} finally {
			setIsLoading(false);
		}
	}, [BASE_URL, id]);

	useEffect(() => {
		if (id) {
			fetchProfileDetails();
		}
	}, [id, fetchProfileDetails]);

	return { isLoading, userProfileData, error, fetchProfileDetails };
};

export default useFetchProfileDetails;
