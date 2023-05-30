import { Paragraph } from "./Paragraph"
import Title from "./Title"

export const Roadmap = () => {
 return  (<div id="roadmap" className="timeline bg-roadmap bg-cover bg-no-repeat py-40 w-full flex flex-col gap-12">
				<div className="timeline-elem left">
					<Paragraph>
						<Title>Phase 0</Title>
						<p>Market Research & Gap Analysis Concept,</p>
						<p>Product Design & Whitepaper</p>
						<p>Preparation Website, Social Media handles Launch</p>
					</Paragraph>
				</div>
				<div className="timeline-elem right"> 
					<Paragraph>
						<Title>Phase 1</Title>
						<p>
							Smart Contract Development & Auditing Pre-Launch Marketing, &
							Influencer Onboarding KYC with Pre-Sale Partner Public Pre-Sale
							Go-Live on Pancakeswap Dex
						</p>
					</Paragraph>
				</div>
				<div className="timeline-elem left">
					<Paragraph>
						<Title>Phase 2</Title>
						<p>
							CoinMarketCap, CoinGecko Listing 5000+ holders More Marketing &
							Influencer Onboarding Promotion in Chinese/Asian Market Kick off
							Community Contests & Airdrops Mission Charity – 1st & 2nd Donation
						</p>
					</Paragraph>
				</div>
				<div className="timeline-elem right">
					<Paragraph>
						<Title>Phase 3</Title>
						<p>
							10000+ holders Tier 1 CEX Listings Revamped Website Launch Mission
							Charity – continues…. Yield Farming Pools Launch (Single Token &
							LP Pair) Cross Chain Liquidity (ETH, ARB, SOL)
						</p>
					</Paragraph>
				</div>
				<div className="timeline-elem left">
					<Paragraph>
						<Title>Phase 4</Title>
						<p>
							Mission Charity – continues… NFT Store Launch Happy Cat
							Merchandise Store HCAT AI Tool Launch HCAT Self-Custodial Walle
						</p>
					</Paragraph>
				</div>
				<p className="px-[30%] text-center text-3xl text-black">
					** We may modify/add new items in Roadmap so as to keep up with the
					latest trends in Blockchain and Crypto Industry. We would always like
					to bring the best for our community.
				</p>
			</div>)
}
