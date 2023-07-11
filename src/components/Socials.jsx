// ReactJS
import React from "react";
import Image from "next/image";
import Title from "./skeleton/Title";

// Local imports
import { SectionContainer } from "./skeleton/SectionContainer";

// Assets
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
export const Socials = () => {
	return (
		<SectionContainer id="footer" className="relative py-40 bg-footer">
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
		</SectionContainer>
	);
};
