// ReactJS
import Image from "next/image";

// Local imports
import { Paragraph } from "./skeleton/Paragraph";
import Title from "./skeleton/Title";

//Assets
import bamboo from "@/img/bamboo.png";
import bamboo2 from "@/img/bamboo-2.png";
import cloud4 from "@/img/cloud-4.png";

export const Roadmap = () => {
	const roadmap = [
		{
			align: "left",
			title: "Phase 0",
			content:
				"Market Research and Ideation\nConcept, Design & Whitepaper Preparation\nWebsite, Social Media handles Launch",
		},
		{
			align: "right",
			title: "Phase 1",
			content:
				"Smart Contract Development & Auditing\nPre-Launch Marketing & Influencers Onboarding\nWL Contest and Public Pre-Sale Launch\nGo-Live on Pancakeswap DEX",
		},
		{
			align: "left",
			title: "Phase 2",
			content:
				"CMC & CG Listing.\nHuge Marketing Push, including Asian & Chinese Markets.\nKick Off Community Contests\nStart BuyBack & Burn\nStart Mission Charity – Donations to Cat Shelter\nInitial AI Tool launch",
		},
		{
			align: "right",
			title: "Phase 3",
			content:
				"10000+ Holders\nMore Marketing push\nFirst-ever Memecert (Meme Concert on Metaverse platform)\nStaking & Farming Platform Launch\nCross Chain Liquidity (ETH/ARB/SOL)\nBuyback & Burn – continues…",
		},
		{
			align: "left",
			title: "Phase 4",
			content:
				"Tier 1 CEX Listing\nMission Charity – continues…\nMore Marketing Push\nBuyback & Burn – continues…",
		},
		{
			align: "right",
			title: "Phase 5",
			content:
				"Mission Charity – continues…\nHappy Cat Merchandise Store\nNFT Store, Metaverse Platform\nAdvanced AI Tools Launch",
		},
	];
	return (
		<div
			id="roadmap"
			className="relative bg-roadmap bg-cover bg-no-repeat py-40 w-full flex flex-col gap-12"
		>
			<div className="flex flex-col gap-12">
				<Title className="text-center">ROADMAP</Title>
				<div className="py-12 lg:py-0">
					<Image
						src={bamboo2}
						alt="bamboo"
						className="absolute top-60 left-0 lg:top-[10%] lg:left-[44%]"
					></Image>
					<div className="pl-40 space-y-4">
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
				</div>
				<p className="px-4 md:px-[30%] text-center text-lg lg:text-2xl text-black font-semibold">
					** We may modify/add new items in Roadmap so as to keep up with the
					latest trends in Blockchain and Crypto Industry. We would always like
					to bring the best for our community.
				</p>
			</div>
		</div>
	);
};
