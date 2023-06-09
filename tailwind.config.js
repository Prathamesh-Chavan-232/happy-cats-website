/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				hero: "url('../img/hero.png')",
				about: "url('../img/about.png')",
				tokenomics: "url('../img/tokenomics.png')",
				roadmap: "url('../img/roadmap.png')",
				xoxo: "url('../img/xoxo.png')",
				splash: "url('../img/splash.jpg')",
				footer: "url('../img/footer.png')",
			},
			colors: {
				primary: "#000",
				secondary: "#FFFFFF",
				about: "#291E56",
				tokenomics: "#183439",
				"btn-purple": "#4D476F",
				"btn-pink": "#4D476F",
			},
			backgroundColor: {
				dark: "#221F20",
				primary: "rgba(255,255,255,0.3)",
			},
		},
	},
	plugins: [],
};
