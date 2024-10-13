import React from "react";

const jobs = [
	{
		title: "Senior Product Designer",
		price: "$25/hr",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto eius ab.",
	},
	{
		title: "Frontend Developer",
		price: "$30/hr",
		description:
			"Develop and maintain user interfaces for web applications. Proficient in React and Tailwind CSS.",
	},
	{
		title: "Backend Developer",
		price: "$35/hr",
		description:
			"Responsible for server-side web application logic and integration of the work front-end developers do.",
	},
	{
		title: "Project Manager",
		price: "$40/hr",
		description:
			"Oversee project planning, scheduling, budgeting, and implementation. Ensure projects are completed on time and within budget.",
	},
	{
		title: "UX Researcher",
		price: "$28/hr",
		description:
			"Conduct user research and usability testing to inform design decisions. Analyze user behavior and feedback.",
	},
];

const TobJobCard = () => {
	return (
		<>
			{jobs.map(({ title, price, description }) => (
				<div className="px-4 flex flex-col space-y-2" key={title}>
					<div className="flex justify-between items-center pt-4">
						<p className="font-bold">{title}</p>
						<p className="font-bold text-md">{price}</p>
					</div>
					<p className="text-sm text-subheading-100">{description}</p>
				</div>
			))}
		</>
	);
};

export default TobJobCard;
