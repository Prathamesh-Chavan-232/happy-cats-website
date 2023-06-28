import React from "react";
import video from "@/img/happycats.mp4";
const page = () => {
	return (
		<div className="bg-black w-screen h-screen flex items-center justify-center">
			<video controls autoPlay loop muted className="w-[70%] h-[75%]">
				<source src={video} type="video/mp4" />
				This browser does not display the video tag.
			</video>
		</div>
	);
};

export default page;
