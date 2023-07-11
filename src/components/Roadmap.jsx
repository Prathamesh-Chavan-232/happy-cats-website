import Image from "next/image";
import { Paragraph } from "./Paragraph";
import Title from "./Title";
import bamboo from "@/img/bamboo.png";
import bamboo2 from "@/img/bamboo-2.png";
import cloud4 from "@/img/cloud-4.png";

export const Roadmap = () => {
	const roadmap = [
		{
			align: "left",
			title: "Phase 0",
			content:
				"Market Research and Ideation\n\n Concept, Design & Whitepaper Preparation\n\nWebsite, Social Media handles Launch",
		},
		{
			align: "right",
			title: "Phase 1",
			content:
				"Smart Contract Development & Auditing\n\nPre-Launch Marketing & Influencers Onboarding\n\nWL Contest and Public Pre-Sale Launch\n\nGo-Live on Pancakeswap DEX",
		},
		{
			align: "left",
			title: "Phase 2",
			content:
				"CMC & CG Listing\n\nHuge Marketing Push, including Asian & Chinese Markets\n\nKick Off Community Contests\n\nStart BuyBack & Burn\n\nStart Mission Charity – Donations to Cat Shelter\n\nInitial AI Tool launch",
		},
		{
			align: "right",
			title: "Phase 3",
			content:
				"10000+ Holders\n\nMore Marketing push\n\nFirst-ever Memecert (Meme Concert on Metaverse platform)\n\nStaking & Farming Platform Launch\n\nCross Chain Liquidity (ETH/ARB/SOL)\n\nBuyback & Burn – continues…",
		},
		{
			align: "left",
			title: "Phase 4",
			content:
				"Tier 1 CEX Listing\n\nMission Charity – continues…\n\nMore Marketing Push\n\nBuyback & Burn – continues…",
		},
		{
			align: "right",
			title: "Phase 5",
			content:
				"Mission Charity – continues…\n\nHappy Cat Merchandise Store\n\nNFT Store, Metaverse Platform\n\nAdvanced AI Tools Launch",
		},
	];
	return (
		<div
			id="roadmap"
			className="relative bg-roadmap bg-cover bg-no-repeat py-40 w-full flex flex-col gap-12"
		>
			<div className="flex flex-col gap-12">
				<Title className="text-center">ROADMAP</Title>
        <div className="py-12">
          <Image
            src={bamboo}
            alt="bamboo"
            className="hidden lg:block absolute top-60 top-[10%] left-[44%]"
          ></Image>
          <Image
            src={bamboo2}
            alt="bamboo"
            className="lg:hidden absolute top-60 left-0"
          ></Image>
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
    </div>
    );
};
