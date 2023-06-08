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
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				hero: "url('../img/hero.png')",
				about: "url('../img/about.png')",
				tokenomics: "url('../img/tokenomics.png')",
				roadmap: "url('../img/roadmap-2.png')",
				xoxo: "url('../img/xoxo.png')",
        splash: "url('../img/splash.png')"
			},
			colors: {
				primary: "#000",
				secondary: "#FFFFFF",
        about: '#291E56',
        tokenomics: '#183439',
			},
			backgroundColor: {
				dark: "#221F20",
				primary: "rgba(255,255,255,0.3)",
			},
		},
	},
	plugins: [],
};
