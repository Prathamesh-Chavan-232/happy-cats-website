import Link from "next/link";
import Image from "next/image";
import logo from "@/img/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faInstagram,
	faDiscord,
	faMedium,
	faTelegram,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const NavItem = ({ link, children }) => {
	return (
		<div className="w-12 h-12 rounded-full bg-[#48414d] flex items-center justify-center">
			<a href={link} target="_blank">
				{children}
			</a>
		</div>
	);
};

export const Header = () => {
	return (
		<header className="z-50 md:block">
			<div className="px-4 lg:px-40 py-2 text-xs flex items-center justify-center md:justify-between bg-dark text-white">
				<Image src={logo} alt="LOGO" className="h-20 w-20"></Image>
				<div className="hidden md:flex gap-4">
					<NavItem link="https://instagram.com">
						<FontAwesomeIcon icon={faInstagram} size="xl" />
					</NavItem>
					<NavItem link="https://twitter.com">
						<FontAwesomeIcon icon={faTwitter} size="xl" />
					</NavItem>
					<NavItem link="https://telegram.org">
						<FontAwesomeIcon icon={faTelegram} size="xl" />
					</NavItem>
					<NavItem link="https://discord.com">
						<FontAwesomeIcon icon={faDiscord} size="xl" />
					</NavItem>
					<NavItem link="https://youtube.com">
						<FontAwesomeIcon icon={faYoutube} size="xl" />
					</NavItem>
					<NavItem link="https://medium.com">
						<FontAwesomeIcon icon={faMedium} size="xl" />
					</NavItem>
				</div>
			</div>
			<div className="hidden lg:flex px-40 py-4 items-center justify-center bg-white text-black">
				<nav className="font-extrabold space-x-20">
					<Link href="#">HOME</Link>
					<Link href="#about">ABOUT</Link>
					<Link href="#tokenomics">TOKENOMICS</Link>
					<Link href="#roadmap">ROADMAP</Link>
					<Link href="#socials">FAQS</Link>
					<Link href="#xoxo">PARTNERS</Link>
					<Link href="/video">VIDEO</Link>
				</nav>
			</div>
			<div className="flex lg:hidden py-6 items-center justify-center bg-white text-black">
				<nav className="font-extrabold space-x-8">
					<Link href="https://instagram.com" target="_blank">
						<FontAwesomeIcon icon={faInstagram} size="xl" />
					</Link>
					<Link href="https://twitter.com" target="_blank">
						<FontAwesomeIcon icon={faTwitter} size="xl" />
					</Link>
					<Link href="https://telegram.org" target="_blank">
						<FontAwesomeIcon icon={faTelegram} size="xl" />
					</Link>
					<Link href="https://discord.com" target="_blank">
						<FontAwesomeIcon icon={faDiscord} size="xl" />
					</Link>
					<Link href="https://youtube.com" target="_blank">
						<FontAwesomeIcon icon={faYoutube} size="xl" />
					</Link>
					<Link href="https://medium.com" target="_blank">
						<FontAwesomeIcon icon={faMedium} size="xl" />
					</Link>
				</nav>
			</div>
			<div></div>
		</header>
	);
};
