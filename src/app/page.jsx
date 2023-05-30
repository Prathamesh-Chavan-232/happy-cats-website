"use client";
import { Paragraph } from "@/components/Paragraph";
import { SectionContainer } from "@/components/SectionContainer";
import { Roadmap } from "@/components/Roadmap";
import Title from "@/components/Title";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const RoadmapWrapper = ({ children }) => {
	return <div className="w-full flex justify-between">{children}</div>;
};

export default function Home() {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<main className="text-white">
			<header className="hidden z-50 md:block">
				<div className="px-40 py-8 flex items-center justify-between bg-dark text-white">
					<span>SOCIALS</span>
					<span>LOGO</span>
					<div className="flex gap-4">
						<Link href="https://instagram.com">Insta</Link>
						<Link href="https://twitter.com">Twitter</Link>
						<Link href="https://telegram.org">Telegram</Link>
						<Link href="https://discord.com">Discord</Link>
						<Link href="https://youtube.com">Youtube</Link>
						<Link href="https://medium.com">Medium</Link>
					</div>
				</div>

				<div className="px-40 py-4 flex items-center justify-center bg-white text-black">
					<nav className="font-extrabold space-x-20">
						<Link href="">HOME</Link>
						<Link href="#about">ABOUT</Link>
						<Link href="">NFTS</Link>
						<Link href="#tokenomics">TOKENOMICS</Link>
						<Link href="#roadmap">ROADMAP</Link>
						<Link href="#socials">SOCIALS</Link>
						<Link href="#xoxo">XOXO</Link>
					</nav>
				</div>
			</header>

			<SectionContainer className="bg-hero h-screen">
				<div className="flex flex-col gap-20">
					<Title anim="zoom-in" className="text-white">
						JOIN HAPPY CATS
					</Title>
					<div className="text-3xl px-[10%]">
						Inspired by the “Happy Cat” viral meme, our own{" "}
						{"<come up with a fancy name>"} (the Cat) has arrived. The days of
						Dogs, Peeps are over. It’s time for our “Happy Happy Cat” to take
						over the Web3 world.
					</div>
					<div className="px-[20%] flex justify-around">
						<button>Buy now</button>
						<button>Claim Airdrop</button>
					</div>
				</div>
			</SectionContainer>

			<SectionContainer id="about" className="py-40 bg-about">
				<div
					data-aos="fade"
					className="flex flex-col items-center justify-center gap-12"
				>
					<Title anim="zoom-in-down">ABOUT US</Title>
					<Paragraph data-aos="fade-down">
						<p className="" data-aos="fade">
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

			<SectionContainer id="tokenomics" className="py-40 bg-tokenomics">
				<div className="flex flex-col items-center justify-center gap-12">
					<Title anim="zoom-in">TOKENOMICS</Title>
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

			<Roadmap />

			<SectionContainer id="xoxo" className="py-64 bg-xoxo">
				<Title anim="fade">XOXO</Title>
			</SectionContainer>
		</main>
	);
}
