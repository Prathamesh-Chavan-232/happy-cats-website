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
	{
		title: "FAQ 4",
		content: "Lorem ipsum dolor sit amet consectetur,",
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
				<div
					onClick={toggleSection}
					className="ease-in-out transition-all duration-300"
				>
					{isActive ? "-" : "+"}
				</div>
			</div>
			{isActive && <div className="px-4 py-6 bg-white">{section.content}</div>}
		</div>
	);
};
export const Accordian = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		<div className="relative px-8 py-[10%] mx-auto space-y-8 min-w-[300px] max-w-[800px]">
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
