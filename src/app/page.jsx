import Footer from "@/components/Footer";
import { Paragraph } from "@/components/Paragraph";
import { SectionContainer } from "@/components/SectionContainer";
import Title from "@/components/Title";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
	return (
		<main className="text-white">
			<header>
				<div className="px-40 py-8 flex items-center justify-between bg-dark text-white">
					<span>SOCIALS</span>
					<span>LOGO</span>
					<span>INTERACTION BUTTONS</span>
				</div>
				<div className="px-40 py-4 flex items-center justify-center bg-white text-black">
					<nav className="space-x-20">
						<Link href="#">HOME</Link>
						<Link href="#about">ABOUT</Link>
						<Link href="">NFTS</Link>
						<Link href="">TOKENOMICS</Link>
						<Link href="">ROADMAP</Link>
						<Link href="">SOCIALS</Link>
						<Link href="">XOXO</Link>
					</nav>
				</div>
			</header>
			<SectionContainer className="h-screen bg-blue-400">
				<Title className="text-white">JOIN HAPPY CATS</Title>
			</SectionContainer>

			<SectionContainer id="about" className="py-40 bg-purple-300">
				<div className="flex flex-col items-center justify-center gap-12">
					<Title>ABOUT US</Title>
					<Paragraph>
						<p>
							Happy Cat is not just a meme project. We are bringing the best of
							AI, GPT and Defi together.
						</p>
						<p>{"<< What tools we plan to bring on AI, GPT, Defi>>"}</p>
						<p>{"<<Metaverse Platform>>"}</p>
						<p>
							Our mission is to make “Every Cat Happy”. With that being said,
							Charity is something we all (Project Founders) strongly believe.
						</p>
						<p>
							We will be donating a significant amount of money to Cat Shelters
							around the world on a regular basis.
						</p>
						<p>
							Let’s vibe and get along on this fun & exciting journey with a
							noble cause.
						</p>
					</Paragraph>
				</div>
			</SectionContainer>
			<SectionContainer id="tokenomics" className="py-40 bg-red-300">
				<div className="flex flex-col items-center justify-center gap-12">
					<Title>TOKENOMICS</Title>
					<Paragraph>
						<p>
							Total Supply is 88 Billions. The number 8 is an extremely lucky
							number in Chinese numerology.
						</p>
						<p>
							It represents prosperity and completeness. The number 88 is
							especially popular in Chinese culture because of the double eights
							but also because of its visual similarity to the sign for double
							happiness: 囍 囍
						</p>
						<p>
							Cat We will have Buy & Sell Tax. Who does not love Reflections,
							passive income just by holding our Tokens.
						</p>
						<p>Buy Tax - 2% reflection, 2% to buyback wallet</p>
						<p>Sell Tax – 2% Reflection, 4% to buyback wallet</p>
					</Paragraph>
				</div>
			</SectionContainer>
			<Footer />
			<SectionContainer id="xoxo" className="bg-blue-400 py-64">
				<Title>XOXO</Title>
			</SectionContainer>
		</main>
	);
}
