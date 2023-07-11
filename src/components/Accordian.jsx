// ReactJS
import { useState } from "react";

// Local imports

// Libraries

import React from "react";

const faqs = [
	{
		title: "FAQ 1",
		content:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ad fugit et sunt culpa voluptatem laudantium, itaque asperiores excepturi expedita natus reiciendis eos corporis atque laboriosam temporibus. Voluptatem nemo quisquam dignissimos dolore soluta, dolorem voluptatibus nihil. Magnam praesentium pariatur quaerat.",
	},
	{
		title: "FAQ 2",
		content:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ad fugit et sunt culpa voluptatem laudantium, itaque asperiores excepturi expedita natus reiciendis eos corporis atque laboriosam temporibus. Voluptatem nemo quisquam dignissimos dolore soluta, dolorem voluptatibus nihil. Magnam praesentium pariatur quaerat.",
	},
	{
		title: "FAQ 3",
		content:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ad fugit et sunt culpa voluptatem laudantium, itaque asperiores excepturi expedita natus reiciendis eos corporis atque laboriosam temporibus. Voluptatem nemo quisquam dignissimos dolore soluta, dolorem voluptatibus nihil. Magnam praesentium pariatur quaerat.",
	},
];

const AccordianContent = ({
	section,
	sectionIndex,
	setActiveIndex,
	isActive,
}) => {
	const toggleSection = () => {
		const newIndex = isActive ? null : sectionIndex;
		setActiveIndex(newIndex);
	};
	return (
		<div className="">
			<div className="px-4 py-6 flex items-center justify-between cursor-pointer bg-dark text-white font-extrabold text-xl">
				<div className="">{section.title}</div>
				<div onClick={toggleSection}>{isActive ? "-" : "+"}</div>
			</div>
			{isActive && <div className="px-4 py-6 bg-white">{section.content}</div>}
		</div>
	);
};
export const Accordian = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		<div className="px-8 py-12 mx-auto space-y-8 max-w-[600px] ">
			{faqs.map((item, i) => {
				return (
					<AccordianContent
						key={i}
						section={item}
						sectionIndex={i}
						isActive={i === activeIndex}
						setActiveIndex={setActiveIndex}
					/>
				);
			})}
		</div>
	);
};
