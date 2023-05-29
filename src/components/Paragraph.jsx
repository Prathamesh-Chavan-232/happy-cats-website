import React from "react";

export const Paragraph = ({ children }) => {
	return (
		<div className="px-96">
			<div className="flex flex-col gap-6 p-20 bg-primary text-black text-2xl font-semibold text-center rounded-xl bg-[length:50%] bg-center bg-no-repeat">
				{children}
			</div>
		</div>
	);
};
