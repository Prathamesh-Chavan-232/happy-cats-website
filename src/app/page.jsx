"use client";
import { Paragraph } from "@/components/Paragraph";
import { SectionContainer } from "@/components/SectionContainer";
import { Roadmap } from "@/components/Roadmap";
import Title from "@/components/Title";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import logo from "@/img/logo.png"
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter,faInstagram,faDiscord,faMedium,faTelegram,faYoutube } from '@fortawesome/free-brands-svg-icons'
import cloud1 from "@/img/cloud-1.png"

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
]

const NavItem = ({link, children}) => {
  return <div className="w-12 h-12 rounded-full bg-[#48414d] flex items-center justify-center">
    <a href={link} >{children}</a>
  </div>
}
export default function Home() {
	useEffect(() => {
		Aos.init({ duration: 600 });
	}, []);
	return (
		<main className="text-primary">
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
						<Link href="#xoxo">NFTS</Link>
						<Link href="#tokenomics">TOKENOMICS</Link>
						<Link href="#roadmap">ROADMAP</Link>
						<Link href="#socials">SOCIALS</Link>
						<Link href="#xoxo">PARTNERS</Link>
					</nav>
				</div>
			</header>

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

			<SectionContainer id="about" className="py-40 bg-about">
        <Image ></Image>
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
        <div className="font-semibold text-white text-lg lg:text-4xl px-4">Our Telegram and Twitter are the best places to stay updated on the latest HAPPY CATS news and connect with fellow community members</div>
        <div className="mx-[20%] xl:mx-60 2xl:mx-96 grid grid-cols-1 xl:grid-cols-2 gap-20 justify-center">
          {
            socials.map((item, i) => {
              return <button key={i} className="px-10 py-6 border border-black bg-white text-2xl text-black font-bold rounded-full baseline shadow-xl">
                <a href={item.link}>{item.title}</a>
              </button>
            })
          }         

          </div>
        </div>
      </SectionContainer>
      <SectionContainer id="xoxo" className="h-screen bg-xoxo">
        <Title anim="fade" className={"text-center text-white"}>
          PARTNERS
        </Title>
      </SectionContainer>
    </main>
  );
}
