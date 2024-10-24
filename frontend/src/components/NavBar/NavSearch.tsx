import React from "react";

const NavSearch = () => {
	return (
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
					className="block w-full p-3 ps-10 text-sm text-gray-900 border border-primary-300 rounded-lg bg-gray-50 focus:ring-primary-200 focus:border-primary-200"
					placeholder="Search..."
					required
				/>
				<button
					type="submit"
					className="text-white absolute end-2.5 top-1 bg-primary-500 hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2"
				>
					Search
				</button>
			</div>
		</form>
	);
};

export default NavSearch;
