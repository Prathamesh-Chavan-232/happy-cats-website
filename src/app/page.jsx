"use client";

// local imports
import Title from "@/components/skeleton/Title";
import { Header } from "@/components/Header";
import { Splash } from "@/components/Splash";
import { Roadmap } from "@/components/Roadmap";
import { Piechart } from "@/components/Piechart";
import { Paragraph } from "@/components/skeleton/Paragraph";
import { SectionContainer } from "@/components/skeleton/SectionContainer";

// Nextjs
import Image from "next/image";
import { useState, useEffect } from "react";

// Assets
import cloud1 from "@/img/cloud-1.png";
import cloud2 from "@/img/cloud-2.png";
import cloud3 from "@/img/cloud-3.png";
import cloud4 from "@/img/cloud-4.png";
import cloud5 from "@/img/cloud-5.png";
// import piechart from "@/img/piechart.jpg";

// Libraries
import "aos/dist/aos.css";
import Aos from "aos";
import { Accordian } from "@/components/Accordian";

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
	}, [first]);

	return <main>{loading ? <Splash /> : <ContentWrapper />}</main>;
}

const ContentWrapper = () => {
	return (
		<div>
			{/* Hero */}
			<Header />
			<SectionContainer className="relative pb-[20%] bg-hero h-full w-screen pt-64">
				<div className="flex flex-col items-center justify-center gap-32">
					<h1
						data-aos="zoom-in"
						className="mt-20 xl:mt-32 text-white text-center text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-extrabold "
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
						<button className="px-6 py-4 md:px-24 md:py-8 border-r-8 border-b-8 lg:border-r-[16px] lg:border-b-[16px] border-btn-pink bg-white text-lg md:text-2xl text-btn-purple font-bold rounded-full baseline">
							<a href="#">Buy Now</a>
						</button>
						<button className="px-6 py-4 md:px-24 md:py-8 border-r-8 border-b-8 lg:border-r-[16px] lg:border-b-[16px] border-btn-pink bg-white text-lg md:text-2xl text-btn-purple font-bold rounded-full baseline">
							<a href="#">Claim Airdrop</a>
						</button>
					</div>
				</div>
			</SectionContainer>

			{/* About */}
			<SectionContainer
				id="about"
				className="py-[10%] lg:py-64 relative bg-about"
			>
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
				className="relative py-[10%] bg-tokenomics"
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
				{/* <Image src={piechart} alt="piechart" /> */}
				<div className="relative text-center space-y-12">
					<Title anim="zoom-in" className="text-tokenomics">
						TOKENOMICS
					</Title>
					<Piechart />
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

			<SectionContainer
				id="partners"
				className="py-[10%] relative bg-xoxo text-center"
			>
				<Image
					src={cloud3}
					alt=""
					data-aos="fade"
					className="absolute -top-[25%] left-[35%] lg:left-[60%]"
				/>
				<Title anim="fade" className={"text-center text-white"}>
					PARTNERS
				</Title>

				<div className="mx-auto px-4 py-20 grid grid-cols-2 md:grid-cols-5 gap-8">
					{Array(10)
						.fill(true)
						.map((item, i) => (
							<div className="h-24 w-24 bg-red-300" key={i}></div>
						))}
				</div>
			</SectionContainer>

			<SectionContainer id="faqs" className="relative py-[10%] bg-footer">
				<Title anim="fade" className={"text-center text-white"}>
					FAQS
				</Title>
				<Accordian />
			</SectionContainer>
		</div>
	);
};
