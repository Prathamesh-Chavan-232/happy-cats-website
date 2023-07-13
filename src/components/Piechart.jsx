// Libraries
import Chart from "react-apexcharts";

const data = [
	["", ""],
	["Team Tokens", 5],
	["Pre-sale", 30],
	["Initial Liquidity", 24],
	["Farming rewards", 8],
	["Marketing & CEX Listing", 8],
	["Future Development", 10],
	["Charity", 10],
	["Community Rewards", 5],
];

const options = {
	pieHole: 0.5,
};

export const Piechart = () => {
	return (
		<div className="px-4 text-left text-2xl font-semibold">
			<Chart
				type="donut"
				// width={800}
				height={800}
				series={[5, 5, 30, 24, 8, 10, 8, 10]}
				options={{
					labels: [
						"Community Rewards",
						"Team Tokens",
						"Pre-sale",
						"Initial Liquidity",
						"Farming rewards",
						"Clarity",
						"Marketing & CEX Listing",
						"Future Development",
					],
				}}
			/>
		</div>
	);
};
