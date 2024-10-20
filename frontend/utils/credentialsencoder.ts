
const encodeCredentials = (username: string, password: string) => {
	return btoa(`${username}:${password}`);
};

export default encodeCredentials
