import React from "react";

function UsersList() {
	// const [users, setUsers] = useState([]);

	// useEffect(() => {
	// 	fetch("http://127.0.0.1:9000/api/profiles/")
	// 		.then((response) => response.json())
	// 		.then((data) => setUsers(data));
	// }, []);

	return (
		<div className="bg-red-500 p-2">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					<div className="text-white font-bold text-xl">W</div>
					<nav>
						<ul className="flex space-x-4">
							<li>
								<i className="fa-solid fa-house text-white"></i>
								<a href="#" className="text-white hover:text-gray-300">
									Home
								</a>
							</li>
							<li>
								<a href="#" className="text-white hover:text-gray-300">
									Companies
								</a>
							</li>
							<li>
								<a href="#" className="text-white hover:text-gray-300">
									Profiles
								</a>
							</li>
							<li>
								<a href="#" className="text-white hover:text-gray-300">
									Jobs
								</a>
							</li>
							<li>
								<a href="#" className="text-white hover:text-gray-300">
									Messages
								</a>
							</li>
							<li>
								<button
									type="button"
									className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300"
								>
									Notification
								</button>
							</li>
						</ul>
					</nav>

					<div className="">John Doe</div>
				</div>
			</div>
		</div>
	);
}

export default UsersList;
