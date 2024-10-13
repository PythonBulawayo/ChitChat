/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}" /* src folder, for example */,
	],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#ffe5e5",
					100: "#ffb3b3",
					200: "#ff8080",
					300: "#ff4d4d",
					400: "#ff1a1a",
					500: "#ff0000", // Base red
				},
				subheading: {
					100: "#5c5b5b ",
				},
			},
			typography: {
				fontFamily: {
					sans: ["Graphik", "sans-serif"],
					serif: ["Merriweather", "serif"],
				},
				fontSize: {
					sm: ["14px", "20px"],
					base: ["16px", "24px"],
					lg: ["18px", "28px"],
					xl: ["20px", "32px"],
				},
				fontWeight: {
					normal: 400,
					bold: 700,
				},
				lineHeight: {
					normal: "normal",
					none: 1,
					tight: 1.25,
					snug: 1.375,
					relaxed: 1.625,
					loose: 2,
				},
				letterSpacing: {
					tight: "-0.05em",
					normal: "0em",
					wide: "0.05em",
				},
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
