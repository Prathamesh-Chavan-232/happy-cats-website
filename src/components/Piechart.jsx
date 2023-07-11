// Libraries
import { Chart } from "react-google-charts";

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
		<div>
			<Chart
				chartType="PieChart"
				options={options}
				data={data}
				width={"100%"}
				height={"300px"}
				className="px-4 lg:px-[20%]"
			/>
		</div>
	);
};
