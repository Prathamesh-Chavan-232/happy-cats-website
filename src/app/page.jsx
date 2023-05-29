"use client";
import { Paragraph } from "@/components/Paragraph";
import { SectionContainer } from "@/components/SectionContainer";
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
					<span>INTERACTION BUTTONS</span>
				</div>
				<div className="px-40 py-4 flex items-center justify-center bg-white text-black">
					<nav className="font-extrabold space-x-20">
						<Link href="#">HOME</Link>
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
				<Title anim="zoom-in" className="text-white">
					JOIN HAPPY CATS
				</Title>
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
			<div className="bg-roadmap bg-cover bg-no-repeat py-40 w-full flex flex-col gap-12">
				<RoadmapWrapper>
					<div className="h-10 w-10">askdw</div>
					<Paragraph>
						<Title>Phase 0</Title>
						<p>Market Research & Gap Analysis Concept,</p>
						<p>Product Design & Whitepaper</p>
						<p>Preparation Website, Social Media handles Launch</p>
					</Paragraph>
				</RoadmapWrapper>
				<RoadmapWrapper>
					<Paragraph>
						<Title>Phase 1</Title>
						<p>
							Smart Contract Development & Auditing Pre-Launch Marketing, &
							Influencer Onboarding KYC with Pre-Sale Partner Public Pre-Sale
							Go-Live on Pancakeswap Dex
						</p>
					</Paragraph>
					<div className="h-10 w-10">askdw</div>
				</RoadmapWrapper>
				<RoadmapWrapper>
					<div className="h-10 w-10">askdw</div>
					<Paragraph>
						<Title>Phase 2</Title>
						<p>
							CoinMarketCap, CoinGecko Listing 5000+ holders More Marketing &
							Influencer Onboarding Promotion in Chinese/Asian Market Kick off
							Community Contests & Airdrops Mission Charity – 1st & 2nd Donation
						</p>
					</Paragraph>
				</RoadmapWrapper>
				<RoadmapWrapper>
					<Paragraph>
						<Title>Phase 3</Title>
						<p>
							10000+ holders Tier 1 CEX Listings Revamped Website Launch Mission
							Charity – continues…. Yield Farming Pools Launch (Single Token &
							LP Pair) Cross Chain Liquidity (ETH, ARB, SOL)
						</p>
					</Paragraph>
					<div className="h-10 w-10">askdw</div>
				</RoadmapWrapper>
				<RoadmapWrapper>
					<div className="h-10 w-10">askdw</div>
					<Paragraph>
						<Title>Phase 4</Title>
						<p>
							Mission Charity – continues… NFT Store Launch Happy Cat
							Merchandise Store HCAT AI Tool Launch HCAT Self-Custodial Walle
						</p>
					</Paragraph>
				</RoadmapWrapper>
				<p className="px-[30%] text-center text-3xl text-black">
					** We may modify/add new items in Roadmap so as to keep up with the
					latest trends in Blockchain and Crypto Industry. We would always like
					to bring the best for our community.
				</p>
			</div>
			<SectionContainer id="xoxo" className="py-64 bg-xoxo">
				<Title anim="fade">XOXO</Title>
			</SectionContainer>
		</main>
	);
}
