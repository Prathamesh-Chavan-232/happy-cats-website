import twitterIcon from "@/img/twitter-icon.svg";
import instagramIcon from "@/img/instagram-icon.svg";
import facebookIcon from "@/img/facebook-icon.svg";
import emailIcon from "@/img/email-icon.svg";
import Image from "next/image";

// TODO: Replace URLs
const Footer = () => {
	return (
		<section className="h-11 p-3 bg-primary w-screen relative right-6">
			<div className="flex flex-row place-content-center gap-4 h-full">
				<a
					className="relative h-full w-5"
					href="https://twitter.com"
					target="_blank"
				>
					<Image src={twitterIcon} alt="Twitter Icon" fill />
				</a>
				<a
					className="relative h-full w-5"
					href="https://facebook.com"
					target="_blank"
				>
					<Image src={facebookIcon} alt="Facebook Icon" fill />
				</a>
				<a
					className="relative h-full w-5"
					href="https://instagram.com"
					target="_blank"
				>
					<Image src={instagramIcon} alt="Instagram Icon" fill />
				</a>
				<a
					className="relative h-full w-5"
					href="https://gmail.com"
					target="_blank"
				>
					<Image src={emailIcon} alt="Email Icon" fill />
				</a>
			</div>
		</section>
	);
};

export default Footer;
