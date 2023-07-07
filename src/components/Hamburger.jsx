import React, { useState } from "react";
import { motion as m } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const MenuToggle = ({ toggle, isOpen }) => {
	return (
		<div>
			<button onClick={toggle} className="font-semibold text-white">
				<FontAwesomeIcon icon={faBars} size="2xl" />
			</button>
		</div>
	);
};

const menuVariants = {
	open: {
		transform: "translateX(3%)",
	},
	closed: {
		transform: "translateX(103%)",
	},
};

const menuTransition = {
	type: "spring",
	duration: 0.5,
	stiffness: 33,
	delay: 0.1,
};

export const Hamburger = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="lg:hidden">
			<MenuToggle toggle={toggleMenu} />
			<m.div
				className="z-[999] !overflow-y-scroll h-screen w-full fixed top-0 right-0 max-w-[70%] md:max-w-[50%] bg-dark shadow-2xl select-none text-white"
				initial={false}
				animate={isOpen ? "open" : "closed"}
				variants={menuVariants}
				transition={menuTransition}
			>
				<div className="py-5 lg:px-24 lg:py-10 flex items-center justify-center gap-4 text-sm lg:absolute lg:right-10">
					<button
						onClick={toggleMenu}
						className="bg-white text-black w-12 h-12 rounded-full text-2xl font-extrabold absolute top-[3%] right-[10%]"
					>
						X
					</button>
				</div>
				<div className="py-16 px-8 flex flex-col gap-12 text-xl font-extrabold">
					<a href="#home">HOME</a>
					<a href="#about">ABOUT</a>
					<a href="#roadmap">ROADMAP</a>
					<a href="#tokenomics">TOKENOMICS</a>
					<a href="#faqs">FAQS</a>
					<a href="#partners">PARTNERS</a>
					<a href="/video">WHITEPAPER</a>
				</div>
			</m.div>
		</div>
	);
};
