import React from "react";

export const SectionContainer = ({ children, className, anim }) => {
	return (
		<div
			className={
				(className || " ") + " flex items-center justify-center text-center"
			}
		>
			<section data-aos={anim}>{children}</section>
		</div>
	);
};
