// ReactJS
import Image from "next/image";

// Local imports
import { Paragraph } from "./skeleton/Paragraph";
import Title from "./skeleton/Title";

//Assets
import bamboo from "@/img/bamboo.png";
import bamboo2 from "@/img/bamboo-2.png";

export const Roadmap = () => {
	const roadmap = [
		{
			align: "left",
			title: "Phase 0",
			content: [
				"Market Research and Ideation",
				"Concept, Design & Whitepaper Preparation",
				"Website, Social Media handles Launch",
			],
		},
		{
			align: "right",
			title: "Phase 1",
			content: [
				"Smart Contract Development & Auditing",
				"Pre-Launch Marketing & Influencers Onboarding",
				"WL Contest and Public Pre-Sale Launch",
				"Go-Live on Pancakeswap DEX",
			],
		},
		{
			align: "left",
			title: "Phase 2",
			content: [
				"CMC & CG Listing.",
				"Huge Marketing Push, including Asian & Chinese Markets.",
				"Kick Off Community Contests",
				"Start BuyBack & Burn",
				"Start Mission Charity – Donations to Cat Shelter",
				"Initial AI Tool launch",
			],
		},
		{
			align: "right",
			title: "Phase 3",
			content: [
				"10000+ Holders",
				"More Marketing push",
				"First-ever Memecert (Meme Concert on Metaverse platform)",
				"Staking & Farming Platform Launch",
				"Cross Chain Liquidity (ETH/ARB/SOL)",
				"Buyback & Burn – continues…",
			],
		},
		{
			align: "left",
			title: "Phase 4",
			content: [
				"Tier 1 CEX Listing",
				"Mission Charity – continues…",
				"More Marketing Pus",
				"Buyback & Burn – continues…",
			],
		},
		{
			align: "right",
			title: "Phase 5",
			content: [
				"Mission Charity – continues…",
				"Happy Cat Merchandise Store",
				"NFT Store, Metaverse Platform",
				"Advanced AI Tools Launch",
			],
		},
	];
	return (
		<div
			id="roadmap"
			className="relative bg-roadmap bg-cover bg-no-repeat py-40 w-full flex flex-col gap-12"
		>
			<div className="px-2 flex flex-col gap-12">
				<Title className="text-center">ROADMAP</Title>
				<div className="py-12 lg:py-0">
					<Image
						src={bamboo2}
						alt="bamboo"
						className="hidden lg:block absolute lg:top-[10%] lg:left-[44%]"
					></Image>
					<Image
						src={bamboo}
						alt="bamboo"
						className="lg:hidden absolute top-60 -left-[15%] md:-left-[10%]"
					></Image>
					<div className="pl-16 space-y-4">
						{roadmap.map((item, i) => {
							return (
								<div key={i} className={"timeline-elem " + item.align}>
									<Paragraph className="whitespace-pre-line">
										<div className="text-4xl">{item.title}</div>
										<p className="text-xl">
											{item.content.map((content, i) => {
												return (
													<li className="px-2" key={i}>
														{content}
													</li>
												);
											})}
										</p>
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
