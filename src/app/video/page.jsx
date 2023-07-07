"use client";
import { useRouter } from "next/navigation";
import video from "@/img/happycats.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
export default function Video() {
	const router = useRouter();
	return (
		<div className="bg-black w-screen h-screen flex items-center justify-center">
			<button
				onClick={() => {
					router.back();
				}}
				className="bg-white text-black w-12 h-12 rounded-full text-2xl font-extrabold absolute top-[5%] left-[10%]"
			>
				<FontAwesomeIcon icon={faArrowLeft} size="xl" />
			</button>
			<video controls autoPlay loop muted className="w-[70%] h-[75%]">
				<source src={video} type="video/mp4" />
				This browser does not display the video tag.
			</video>
		</div>
	);
}
