import React, { useState } from "react";
import { motion as m } from "framer-motion";

const MenuToggle = ({ toggle, isOpen }) => {
	return (
		<div>
			<button onClick={toggle} className="font-semibold text-white">
				Open
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
				className="z-[999] !overflow-y-scroll h-screen w-full fixed top-0 right-0 max-w-[70%] md:max-w-[50%] bg-black shadow-2xl select-none text-white"
				initial={false}
				animate={isOpen ? "open" : "closed"}
				variants={menuVariants}
				transition={menuTransition}
			>
				<div className="py-5 lg:px-24 lg:py-10 flex items-center justify-center gap-4 text-sm lg:absolute lg:right-10">
					<button onClick={toggleMenu}>Close</button>
				</div>
			</m.div>
		</div>
	);
};
