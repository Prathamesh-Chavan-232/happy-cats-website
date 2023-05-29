import React from "react";

export const Paragraph = ({ children }) => {
	return (
		<div data-aos="fade-down" className="mx-[20%]">
			<div className="p-20 flex flex-col gap-6 w-full bg-primary text-black text-3xl font-semibold text-center rounded-xl bg-[length:50%] bg-center bg-no-repeat">
				{children}
			</div>
		</div>
	);
};
