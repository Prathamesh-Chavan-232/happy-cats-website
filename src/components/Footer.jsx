import { Paragraph } from "./Paragraph";

// TODO: Replace URLs
const Footer = () => {
	return (
		<section className="bg-hero bg-no-repeat bg-[100%_auto] py-40 w-screen relative right-6">
			<div className="flex flex-row place-content-center gap-4 h-full">
				<Paragraph>
					<a
						className="relative h-full w-5"
						href="https://twitter.com"
						target="_blank"
					>
					</a>
				</Paragraph>
			</div>
		</section>
	);
};

export default Footer;
