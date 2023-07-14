// ReactJS
import React from "react";

// Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faInstagram,
	faDiscord,
	faMedium,
	faTelegram,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";

// Assets

export const MobileHeader = () => {
	return (
		<div>
			<div className="w-screen flex lg:hidden py-6 items-center justify-center bg-white text-black">
				<nav className="font-extrabold space-x-8">
					<a href="https://instagram.com" target="_blank">
						<FontAwesomeIcon icon={faInstagram} size="xl" />
					</a>
					<a href="https://twitter.com" target="_blank">
						<FontAwesomeIcon icon={faTwitter} size="xl" />
					</a>
					<a href="https://telegram.org" target="_blank">
						<FontAwesomeIcon icon={faTelegram} size="xl" />
					</a>
					<a href="https://discord.com" target="_blank">
						<FontAwesomeIcon icon={faDiscord} size="xl" />
					</a>
					<a href="https://youtube.com" target="_blank">
						<FontAwesomeIcon icon={faYoutube} size="xl" />
					</a>
					<a href="https://medium.com" target="_blank">
						<FontAwesomeIcon icon={faMedium} size="xl" />
					</a>
				</nav>
			</div>
		</div>
	);
};
