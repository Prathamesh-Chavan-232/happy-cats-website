"use client";
import Title from "@/components/Title";
import { Paragraph } from "@/components/Paragraph";
import { SectionContainer } from "@/components/SectionContainer";
import { Roadmap } from "@/components/Roadmap";

import Image from "next/image";
import { useState, useEffect } from "react";

import cloud1 from "@/img/cloud-1.png";
import cloud2 from "@/img/cloud-2.png";
import cloud3 from "@/img/cloud-3.png";
import cloud4 from "@/img/cloud-4.png";
import cloud5 from "@/img/cloud-5.png";
import piechart from "@/img/piechart.jpg";

import "aos/dist/aos.css";
import Aos from "aos";
import { Header } from "@/components/Header";
import { Splash } from "@/components/Splash";
import twitter from "@/img/Twitter.png";
import telegram from "@/img/Telegram.png";
import instagram from "@/img/Instagram.png";
import medium from "@/img/Medium.png";
import discord from "@/img/discord.png";
import youtube from "@/img/YouTube.png";

const socials = [
	{
		title: "Telegram",
		link: "https://www.telegram.org",
		img: telegram,
	},
	{
		title: "Medium",
		link: "https://www.medium.com",
		img: medium,
	},
	{
		title: "Twitter",
		link: "https://www.twitter.com",
		img: twitter,
	},
	{
		title: "Discord",
		link: "https://www.discord.org",
		img: discord,
	},
	{
		title: "Youtube",
		link: "https://www.youtube.com",
		img: youtube,
	},
	{
		title: "Instagram",
		link: "https://www.instagram.com",
		img: instagram,
	},
];

const ContentWrapper = () => {
	return (
		<div className="overflow-x-hidden">
			{/* Hero */}
			<Header />
			{/* Hero */}
			<SectionContainer className="bg-hero h-screen w-screen">
				<div className="flex flex-col justify-center items-center gap-16">
					<h1
						data-aos="zoom-in"
						className="mt-20 xl:mt-32 text-white text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-extrabold "
					>
						JOIN HAPPY CATS
					</h1>
					<div className="font-semibold text-white text-lg lg:text-2xl 2xl:text-4xl px-4 md:px-[20%]">
						Inspired by the “Happy Cat” viral meme, our own{" "}
						{"<come up with a fancy name>"} (the Cat) has arrived. The days of
						Dogs, Peeps are over. It’s time for our “Happy Happy Cat” to take
						over the Web3 world.
					</div>
					<div className="flex gap-6">
						<button className="px-6 py-4 md:px-24 md:py-8 border border-black bg-white text-lg md:text-2xl text-black font-bold rounded-full baseline">
							<a href="#">Buy Now</a>
						</button>
						<button className="px-6 py-4 md:px-24 md:py-8 border border-black bg-white text-lg md:text-2xl text-black font-bold rounded-full baseline">
							<a href="#">Claim Airdrop</a>
						</button>
					</div>
				</div>
			</SectionContainer>

			{/* About */}
			<SectionContainer id="about" className="py-10 lg:py-64 relative bg-about">
				<Image
					src={cloud1}
					alt=""
					data-aos="fade"
					className="hidden lg:block absolute top-0 left-0"
				/>
				<Image
					src={cloud2}
					alt=""
					data-aos="fade"
					className="absolute -top-20 right-0"
				/>
				<Image
					src={cloud3}
					alt=""
					data-aos="fade"
					className="absolute -top-36 right-[50%] lg:-top-16 lg:-right-20"
				/>
				<div
					data-aos="fade"
					className="flex flex-col items-center justify-center gap-12"
				>
					<Title anim="zoom-in-down" className="text-about">
						ABOUT US
					</Title>
					<Paragraph data-aos="fade-down" className="text-about">
						<p>
							Inspired by the “Happy Happy Cat” viral meme, Our mission is to
							make “Every Cat Happy”. With that being said, Charity is something
							we all strongly believe.
						</p>
						Happy Cat is not just a meme project. We are bringing the best of
						AI, Metaverse, and Defi together.
						<p>
							Our own “Happy Cat” has arrived. The days of Dogs, Pepes are over.
							It’s time for our “Happy Cat” to take over the Web3 world.
						</p>
						{/* <p>{"<< What tools we plan to bring on AI, GPT, Defi>>"}</p>
						<p>{"<<Metaverse Platform>>"}</p> */}
						<p>
							Our mission is to make “Every Cat Happy”. With that being said,
							Charity is something we all (Project Founders) strongly believe.
						</p>
						<p>
							Hence, we will be donating a significant amount of money to Cat
							Shelters around the world on a regular basis. Let’s vibe and get
							along on this fun & exciting journey with a noble cause.
						</p>
						<p>
							Let’s vibe and get along on this fun & exciting journey with a
							noble cause.
						</p>
					</Paragraph>
				</div>
			</SectionContainer>

			<SectionContainer
				id="tokenomics"
				className="relative py-10 lg:py-64 bg-tokenomics"
			>
				<Image
					src={cloud5}
					alt=""
					data-aos="fade"
					className="absolute -top-20 left-0 lg:-top-36 lg:left-[50%]"
				/>
				<Image
					src={cloud4}
					alt=""
					data-aos="fade"
					className="absolute -top-20 right-0 lg:-top-24 lg:right-[50%]"
				/>
				<div className="flex flex-col items-center justify-center gap-12">
					<Title anim="zoom-in" className="text-tokenomics">
						TOKENOMICS
					</Title>
					<div className="px-4">
						<Image src={piechart} alt="piechart" />
					</div>

					<Paragraph className="text-tokenomics">
						<p>
							Total Token Supply – 88,000,000,000 (88 Billion). The number 8 is
							an extremely lucky number in some numerology. It represents
							prosperity and completeness.
						</p>
						<p>
							It represents prosperity and completeness. The number 88 is
							especially popular in Chinese culture because of the double eights
							but also because of its visual similarity to the sign for double
							happiness: 囍 囍
						</p>
						<p>
							Happy Cat will also be a highly deflationary Token. The Team will
							buyback tokens from open market and burn on regular basis.
						</p>
						<p>
							Cat We will have Buy & Sell Tax. Who does not love Reflections,
							passive income just by holding our Tokens.
						</p>
						<p>Buy Tax - 2% reflection, 2% to buyback wallet</p>
						<p>Sell Tax – 2% Reflection, 4% to buyback wallet</p>
					</Paragraph>
					<Paragraph>
						<p>
							Presale – 30% of Total tokens will be available for Whitelisted
							Pre-sale.{" "}
						</p>
						<p>
							Staking & Farming Platforms – 8% of total supply will be set as
							Rewards Charity – 10% of total supply is kept aside for Charity
							and Donations Marketing & CEX
						</p>
						<p>
							Listing – 8% of total supply for Marketing and CEX Listing. Team
						</p>
						<p>
							Future Development – 10% is kept aside for all future Product
							Developments. Community rewards & Airdrops – 5% is kept aside for
							rewards.
						</p>
						<p>
							Initial Liquidity – 24% of Total Tokens, we plan to add more
							liquidity in future.
						</p>
						<p>Tokens – only 5% is kept aside for the entire Team</p>
					</Paragraph>
				</div>
			</SectionContainer>

			<Roadmap />

			{/* <SectionContainer id="footer" className="relative py-40 bg-footer">
				<Image
					src={cloud3}
					alt=""
					data-aos="fade"
					className="absolute -top-20 left-[35%] lg:left-[80%]"
				/>
				<div className="px-4 lg:px-12 flex flex-col items-center justify-center gap-20">
					<Title className="text-white font-extrabold">SOCIALS</Title>
					<div className="font-semibold text-white text-lg lg:text-4xl px-4">
						Our Telegram and Twitter are the best places to stay updated on the
						latest HAPPY CATS news and connect with fellow community members
					</div>
					<div className="xl:mx-80 2xl:mx-96 grid grid-cols-2 gap-4 lg:gap-20 justify-center">
						{socials.map((item, i) => {
							return (
								<button
									key={i}
									className="px-12 py-2 border border-black bg-white text-md lg:text-2xl text-black text-center font-bold rounded-full baseline shadow-xl"
								>
									<div className="flex items-center justify-center gap-4">
										<Image src={item.img} alt="" />
										<a href={item.link} className="text-center">
											{item.title}
										</a>
									</div>
								</button>
							);
						})}
					</div>
				</div>
			</SectionContainer> */}

			<SectionContainer id="xoxo" className="h-screen bg-footer">
				<Title anim="fade" className={"text-center text-white"}>
					FAQS
				</Title>
			</SectionContainer>
			<SectionContainer id="xoxo" className="h-screen bg-xoxo">
				<Title anim="fade" className={"text-center text-white"}>
					PARTNERS
				</Title>
			</SectionContainer>
		</div>
	);
};

export default function Home() {
	const [loading, setLoading] = useState(true);
	const [first, setFirst] = useState(true);
	useEffect(() => {
		if (first) {
			setLoading(true);

			setTimeout(() => {
				setLoading(false);
			}, 2000);
		}

		setFirst(false);
		Aos.init({ duration: 600 });
	}, []);

	return <main>{loading ? <Splash /> : <ContentWrapper />}</main>;
}
