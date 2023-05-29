import React from "react";

export const SectionContainer = ({ children, className, anim }) => {
	return (
		<div
			className={
				(className || " ") +
				" bg-cover bg-no-repeat flex items-center justify-center text-center"
			}
		>
			<section data-aos={anim}>{children}</section>
		</div>
	);
};
