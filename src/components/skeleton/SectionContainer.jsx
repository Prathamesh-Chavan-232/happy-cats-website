import React from "react";

export const SectionContainer = ({ id, children, className, anim }) => {
	return (
		<div
			id={id}
			className={
				"w-screen bg-cover bg-no-repeat bg-center object-cover flex flex-col items-center justify-center text-left " +
				(className || " ")
			}
		>
			<section data-aos={anim}>{children}</section>
		</div>
	);
};
