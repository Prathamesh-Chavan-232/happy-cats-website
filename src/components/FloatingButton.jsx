import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export const FloatingButton = () => {
	return (
		<a
			href="#"
			className="z-[99] float flex items-center justify-center bg-dark"
		>
			<FontAwesomeIcon
				icon={faArrowUp}
				size="lg"
				className="text-white"
			></FontAwesomeIcon>
		</a>
	);
};
