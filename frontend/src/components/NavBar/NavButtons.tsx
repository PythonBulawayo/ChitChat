import React from "react";
import { Link } from "react-router-dom";

const NavButtons = () => {
	return (
		<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-2 lg:space-x-4 md:flex-row md:mt-0 border-2 md:border-0 border-primary-100 bg-primary-300 md:bg-primary-500">
			<li className="flex md:flex-col flex-row justify-start md:justify-center items-center cursor-pointer group hover:text-primary-100">
				<Link
					to="/"
					className="py-1 px-3 text-white text-lg group-hover:text-primary-100 flex lg:flex-col lg:gap-0 gap-4 items-center"
					aria-current="page"
				>
					<svg
						className="w-8 h-8 lg:w-6 lg:h-6 text-white dark:text-white group-hover:text-primary-100"
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
					<span className="block md:hidden lg:block">Home</span>
				</Link>
			</li>
			<li className="flex md:flex-col flex-row justify-start md:justify-center items-center cursor-pointer group hover:text-primary-100">
				<Link
					to="/messages"
					className="py-1 px-3 text-white text-lg group-hover:text-primary-100 flex lg:flex-col lg:gap-0 gap-4 items-center"
					aria-current="page"
				>
					<svg
						className="w-8 h-8 lg:w-6 lg:h-6 text-white dark:text-white group-hover:text-primary-100"
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

					<span className="block md:hidden lg:block">Messages</span>
				</Link>
			</li>
			<li className="flex md:flex-col flex-row justify-start md:justify-center items-center cursor-pointer group hover:text-primary-100">
				<Link
					to="/notifications"
					className="py-1 px-3 text-white text-lg group-hover:text-primary-100 flex lg:flex-col lg:gap-0 gap-4 items-center"
					aria-current="page"
				>
					<svg
						className="w-8 h-8 lg:w-6 lg:h-6 text-white dark:text-white group-hover:text-primary-100"
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

					<span className="block md:hidden lg:block">Notifications</span>
				</Link>
			</li>
		</ul>
	);
};

export default NavButtons;
