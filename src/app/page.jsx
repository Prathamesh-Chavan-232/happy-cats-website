"use client";
import Title from "@/components/Title";
import { Paragraph } from "@/components/Paragraph";
import { SectionContainer } from "@/components/SectionContainer";
import { Roadmap } from "@/components/Roadmap";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import cloud1 from "@/img/cloud-1.png";
import cloud2 from "@/img/cloud-2.png";
import cloud3 from "@/img/cloud-3.png";

import "aos/dist/aos.css";
import Aos from "aos";
import { Header } from "@/components/Header";
import { Splash } from "@/components/Splash";

const socials = [
	{
		title: "Telegram",
		link: "https://www.telegram.org",
		img: "",
	},
	{
		title: "Medium",
		link: "https://www.medium.com",
		img: "",
	},
	{
		title: "Twitter",
		link: "https://www.twitter.com",
		img: "",
	},
	{
		title: "Discord",
		link: "https://www.discord.org",
		img: "",
	},
	{
		title: "Youtube",
		link: "https://www.youtube.com",
		img: "",
	},
	{
		title: "Instagram",
		link: "https://www.instagram.com",
		img: "",
	},
];

const ContentWrapper = () => {
	return (
		<div>
			{/* Hero */}
			<Header />
			{/* Hero */}
			<SectionContainer className="bg-hero h-screen w-screen">
				<div className="flex flex-col justify-center gap-20">
					<h1
						data-aos="zoom-in"
						className="xl:mt-32 text-white text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-extrabold "
					>
						JOIN HAPPY CATS
					</h1>
					<div className="font-semibold text-white text-lg lg:text-2xl 2xl:text-4xl px-4 md:px-[20%]">
						Inspired by the “Happy Cat” viral meme, our own{" "}
						{"<come up with a fancy name>"} (the Cat) has arrived. The days of
						Dogs, Peeps are over. It’s time for our “Happy Happy Cat” to take
						over the Web3 world.
					</div>
					<div className="flex justify-around">
						<button className="px-6 py-4 md:px-24 md:py-8 border border-white bg-white text-lg md:text-2xl text-black font-bold rounded-full baseline">
							<a href="#">Buy Now</a>
						</button>
						<button className="px-6 py-4 md:px-24 md:py-8 border border-white bg-white text-lg md:text-2xl text-black font-bold rounded-full baseline">
							<a href="#">Claim Airdrop</a>
						</button>
					</div>
				</div>
			</SectionContainer>

			{/* About */}
			<SectionContainer id="about" className="py-40 bg-about">
				<Image src={cloud1} alt="" />
				<div
					data-aos="fade"
					className="flex flex-col items-center justify-center gap-12"
				>
					<Title anim="zoom-in-down" className="text-about">
						ABOUT US
					</Title>
					<Paragraph data-aos="fade-down" className="text-about">
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
					<Title anim="zoom-in" className="text-tokenomics">
						TOKENOMICS
					</Title>
					<Paragraph className="text-tokenomics">
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

			<SectionContainer id="footer" className="py-40 bg-splash">
				<div className="px-4 space-y-20">
					<Title className="text-white font-extrabold">SOCIALS</Title>
					<div className="font-semibold text-white text-lg lg:text-4xl px-4">
						Our Telegram and Twitter are the best places to stay updated on the
						latest HAPPY CATS news and connect with fellow community members
					</div>
					<div className="mx-[20%] xl:mx-60 2xl:mx-96 grid grid-cols-1 xl:grid-cols-2 gap-20 justify-center">
						{socials.map((item, i) => {
							return (
								<button
									key={i}
									className="px-10 py-6 border border-black bg-white text-2xl text-black font-bold rounded-full baseline shadow-xl"
								>
									<a href={item.link}>{item.title}</a>
								</button>
							);
						})}
					</div>
				</div>
			</SectionContainer>
			<SectionContainer id="xoxo" className="h-screen bg-xoxo">
				<Title anim="fade" className={"text-center text-white"}>
					PARTNERS
				</Title>
			</SectionContainer>
		</div>
	);
}

export default function Home() {

  const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    },3000)
		Aos.init({ duration: 600 });
	}, []);
  
	return (
		<main>
			{loading ? <Splash /> : <ContentWrapper />}
		</main>
	);
}
