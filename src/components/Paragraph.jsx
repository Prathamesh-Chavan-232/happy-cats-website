import React from "react";

export const Paragraph = ({ children, className }) => {
	return (
		<div data-aos="fade-down" className="mx-4 lg:mx-[20%]">
			<div
				className={
					"py-20 px-4 md:px-8 lg:px-20 flex flex-col gap-6 w-full font-semibold text-xl lg:text-3xl text-center rounded-xl bg-primary bg-center bg-no-repeat " +
					(className || "")
				}
			>
				{children}
			</div>
		</div>
	);
};
