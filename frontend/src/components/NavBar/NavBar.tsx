import React, { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import NavButtons from "./NavButtons";
import NavSearch from "./NavSearch";

export const NavBar = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [navOpen, setNavOpen] = useState(false);

	return (
		<nav className="bg-primary-500 w-full flex-wrap lg:flex-nowrap lg:w-full flex items-center md:justify-around p-3 justify-between">
			<div className="flex items-center justify-between space-x-4 w-full md:w-fit">
				<a href="/" className="flex items-center space-x-2">
					<span className="text-white md:text-4xl font-bold text-2xl">
						ChitChat
					</span>
				</a>
				<div className="flex items-center justify-center space-x-2">
					
					<form className="relative hidden lg:block">
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
				<NavSearch />
				<NavButtons />
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
