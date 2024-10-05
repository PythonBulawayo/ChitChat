import React, { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../constants";

export const NavBar = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [navOpen, setNavOpen] = useState(false);

	return (
		<nav className="bg-primary-500 w-full flex flex-wrap items-center md:justify-around p-3 justify-between">
			<div className="flex items-center justify-between space-x-4 w-full md:w-fit">
				<a href="/" className="flex items-center space-x-2">
					<span className="text-white md:text-4xl font-bold text-2xl">
						ChitChat
					</span>
				</a>
				<div className="flex items-center justify-center space-x-2">
					<form className="relative hidden md:block">
						<div className="relative">
							<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
								<svg
									className="w-4 h-4 text-gray-500 dark:text-gray-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 20 20"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
									/>
								</svg>
							</div>
							<input
								type="search"
								id="default-search"
								className="block w-full p-3 ps-10 text-sm text-gray-900 border border-primary-300 rounded-lg bg-gray-50 focus:ring-primary-200 focus:border-primary-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
								placeholder="Search..."
								required
							/>
							<button
								type="submit"
								className="text-white absolute end-2.5 top-1 bg-secondary-500 hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2"
							>
								Search
							</button>
						</div>
					</form>
					<button
						onClick={() => setNavOpen(!navOpen)}
						className="text-white md:hidden focus:outline-none"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							></path>
						</svg>
					</button>
					<div className="relative md:hidden pt-1">
						<button
							onClick={() => setDropdownOpen(!dropdownOpen)}
							className="text-white hover:text-primary-100 focus:outline-none"
						>
							<img
								src={images.userProfile}
								alt="profile"
								className="w-8 h-8 rounded-full"
							/>
						</button>
						{dropdownOpen && (
							<div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
								<Link
									to="/logout"
									className="block px-4 py-2 text-gray-800 hover:bg-primary-500 hover:text-white rounded"
								>
									My Account
								</Link>
								<Link
									to="/logout"
									className="block px-4 py-2 text-gray-800 hover:bg-primary-500 hover:text-white rounded"
								>
									Logout
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
			<div
				className={`flex-col md:flex md:flex-row md:items-center md:space-x-4 ${navOpen ? "flex" : "hidden"} w-full md:w-auto`}
			>
				<form className="relative flex md:hidden w-full pt-4">
					<div className="relative w-full">
						<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
							<svg
								className="w-4 h-4 text-gray-500 dark:text-gray-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 20 20"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
								/>
							</svg>
						</div>
						<input
							type="search"
							id="default-search"
							className="block w-full p-3 ps-10 text-sm text-gray-900 border border-primary-300 rounded-lg bg-gray-50 focus:ring-primary-200 focus:border-primary-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
							placeholder="Search..."
							required
						/>
						<button
							type="submit"
							className="text-white absolute end-2.5 top-1 bg-secondary-500 hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2"
						>
							Search
						</button>
					</div>
				</form>
				<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 border-2 md:border-0 border-primary-100 bg-primary-300 md:bg-primary-500">
					<li className="flex md:flex-col flex-row justify-start md:justify-center items-center cursor-pointer group hover:text-primary-100">
						<svg
							className="w-6 h-6 text-white dark:text-white group-hover:text-primary-100"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								fillRule="evenodd"
								d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
								clipRule="evenodd"
							/>
						</svg>

						<Link
							to="/"
							className="block py-1 px-3 text-white text-lg group-hover:text-primary-100"
							aria-current="page"
						>
							Home
						</Link>
					</li>
					<li className="flex md:flex-col flex-row justify-start md:justify-center items-center cursor-pointer group hover:text-primary-100">
						<svg
							className="w-6 h-6 text-white dark:text-white group-hover:text-primary-100"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z"
							/>
						</svg>

						<Link
							to="/campanies"
							className="block py-1 px-3 text-white text-lg group-hover:text-primary-100"
							aria-current="page"
						>
							Companies
						</Link>
					</li>
					<li className="flex md:flex-col flex-row justify-start md:justify-center items-center cursor-pointer group hover:text-primary-100">
						<svg
							className="w-6 h-6 text-white dark:text-white group-hover:text-primary-100"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								fillRule="evenodd"
								d="M12 8a1 1 0 0 0-1 1v10H9a1 1 0 1 0 0 2h11a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-8Zm4 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
								clipRule="evenodd"
							/>
							<path
								fillRule="evenodd"
								d="M5 3a2 2 0 0 0-2 2v6h6V9a3 3 0 0 1 3-3h8c.35 0 .687.06 1 .17V5a2 2 0 0 0-2-2H5Zm4 10H3v2a2 2 0 0 0 2 2h4v-4Z"
								clipRule="evenodd"
							/>
						</svg>

						<Link
							to="/projects"
							className="block py-1 px-3 text-white text-lg group-hover:text-primary-100"
							aria-current="page"
						>
							Projects
						</Link>
					</li>

					<li className="flex md:flex-col flex-row justify-start md:justify-center items-center cursor-pointer group hover:text-primary-100">
						<svg
							className="w-6 h-6 text-white dark:text-white group-hover:text-primary-100"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								fillRule="evenodd"
								d="M14 7h-4v3a1 1 0 0 1-2 0V7H6a1 1 0 0 0-.997.923l-.917 11.924A2 2 0 0 0 6.08 22h11.84a2 2 0 0 0 1.994-2.153l-.917-11.924A1 1 0 0 0 18 7h-2v3a1 1 0 1 1-2 0V7Zm-2-3a2 2 0 0 0-2 2v1H8V6a4 4 0 0 1 8 0v1h-2V6a2 2 0 0 0-2-2Z"
								clipRule="evenodd"
							/>
						</svg>

						<Link
							to="/jobs"
							className="block py-1 px-3 text-white text-lg group-hover:text-primary-100"
							aria-current="page"
						>
							Jobs
						</Link>
					</li>
					<li className="flex md:flex-col flex-row justify-start md:justify-center items-center cursor-pointer group hover:text-primary-100">
						<svg
							className="w-6 h-6 text-white dark:text-white group-hover:text-primary-100"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								fillRule="evenodd"
								d="M3 5.983C3 4.888 3.895 4 5 4h14c1.105 0 2 .888 2 1.983v8.923a1.992 1.992 0 0 1-2 1.983h-6.6l-2.867 2.7c-.955.899-2.533.228-2.533-1.08v-1.62H5c-1.105 0-2-.888-2-1.983V5.983Zm5.706 3.809a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Zm2.585.002a1 1 0 1 1 .003 1.414 1 1 0 0 1-.003-1.414Zm5.415-.002a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Z"
								clipRule="evenodd"
							/>
						</svg>

						<Link
							to="/messages"
							className="block py-1 px-3 text-white text-lg group-hover:text-primary-100"
							aria-current="page"
						>
							Messages
						</Link>
					</li>
					<li className="flex md:flex-col flex-row justify-start md:justify-center items-center cursor-pointer group hover:text-primary-100">
						<svg
							className="w-6 h-6 text-white dark:text-white group-hover:text-primary-100"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M11.209 3.816a1 1 0 0 0-1.966.368l.325 1.74a5.338 5.338 0 0 0-2.8 5.762l.276 1.473.055.296c.258 1.374-.228 2.262-.63 2.998-.285.52-.527.964-.437 1.449.11.586.22 1.173.75 1.074l12.7-2.377c.528-.1.418-.685.308-1.27-.103-.564-.636-1.123-1.195-1.711-.606-.636-1.243-1.306-1.404-2.051-.233-1.085-.275-1.387-.303-1.587-.009-.063-.016-.117-.028-.182a5.338 5.338 0 0 0-5.353-4.39l-.298-1.592Z" />
							<path
								fillRule="evenodd"
								d="M6.539 4.278a1 1 0 0 1 .07 1.412c-1.115 1.23-1.705 2.605-1.83 4.26a1 1 0 0 1-1.995-.15c.16-2.099.929-3.893 2.342-5.453a1 1 0 0 1 1.413-.069Z"
								clipRule="evenodd"
							/>
							<path d="M8.95 19.7c.7.8 1.7 1.3 2.8 1.3 1.6 0 2.9-1.1 3.3-2.5l-6.1 1.2Z" />
						</svg>

						<Link
							to="/notifications"
							className="block py-1 px-3 text-white text-lg group-hover:text-primary-100"
							aria-current="page"
						>
							Notifications
						</Link>
					</li>
				</ul>
				<div className="relative hidden md:block">
					<button
						onClick={() => setDropdownOpen(!dropdownOpen)}
						className="text-white hover:text-primary-100 focus:outline-none"
					>
						<img
							src={images.userProfile}
							alt="profile"
							className="w-12 h-12 rounded-full"
						/>
					</button>
					{dropdownOpen && (
						<div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
							<Link
								to="/logout"
								className="block px-4 py-2 text-gray-800 hover:bg-primary-500 hover:text-white rounded"
							>
								My Account
							</Link>
							<Link
								to="/logout"
								className="block px-4 py-2 text-gray-800 hover:bg-primary-500 hover:text-white rounded"
							>
								Logout
							</Link>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
};
