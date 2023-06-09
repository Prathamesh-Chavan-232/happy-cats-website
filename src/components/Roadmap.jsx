import Image from "next/image";
import { Paragraph } from "./Paragraph";
import Title from "./Title";
import bamboo from "@/img/bamboo.png"
import bamboo2 from "@/img/bamboo-2.png"
import cloud4 from "@/img/cloud-4.png";

export const Roadmap = () => {
	const roadmap = [
		{
			align: "left",
			title: "Phase 0",
			content:
				"Market Research & Gap Analysis Concept,\n\nProduct Design & Whitepaper\n\nPreparation Website, Social Media handles Launch ",
		},
		{
			align: "right",
			title: "Phase 1",
			content:
				"Smart Contract Development & Auditing Pre-Launch Marketing, &\n\n Influencer Onboarding KYC with Pre-Sale Partner Public Pre-Sale\n\n Go-Live on Pancakeswap Dex",
		},
		{
			align: "left",
			title: "Phase 2",
			content:
				"CoinMarketCap, CoinGecko Listing 5000+ holders\n\n More Marketing & Influencer Onboarding Promotion in Chinese/Asian Market\n\n Kick off Community Contests & Airdrops Mission Charity – 1st & 2nd Donation ",
		},
		{
			align: "right",
			title: "Phase 3",
			content:
				"10000+ holders Tier 1 CEX Listings Revamped Website Launch Mission\n\n Charity – continues…. Yield Farming Pools Launch (Single Token & LP\n\n Pair) Crossi Chain Liquidity (ETH, ARB, SOL)",
		},
		{
			align: "left",
			title: "Phase 4",
			content:
				"Mission Charity – continues… NFT Store Launch Happy Cat Merchandise\n\n Store HCAT AI Tool Launch HCAT Self-Custodial Walle",
		},
	];
	return (
		<div
			id="roadmap"
			className="relative bg-roadmap bg-cover bg-no-repeat py-40 w-full flex flex-col gap-12"
		>
			<div className="flex flex-col gap-20">
        <Title className="text-center">ROADMAP</Title>
        <Image src={bamboo} alt="bamboo" className="hidden lg:block absolute top-60 left-[5%] xl:left-[45%]"></Image>
        <Image src={bamboo2} alt="bamboo" className="lg:hidden absolute top-60 left-0"></Image>
				{roadmap.map((item, i) => {
					return (
						<div key={i} className={"timeline-elem " + item.align}>
							<Paragraph className="whitespace-pre-line">
								<div className="text-4xl">{item.title}</div>
								<p className="text-xl">{item.content}</p>
							</Paragraph>
						</div>
					);
				})}
			</div>
			<p className="px-4 md:px-[30%] text-center text-lg lg:text-2xl text-black font-semibold">
				** We may modify/add new items in Roadmap so as to keep up with the
				latest trends in Blockchain and Crypto Industry. We would always like to
				bring the best for our community.
			</p>
		</div>
	);
};
