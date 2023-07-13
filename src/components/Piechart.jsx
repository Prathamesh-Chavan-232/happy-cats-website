// Libraries
"use client";
import Chart from "chart.js/auto";
import { useRef, useEffect } from "react";

const data = [
	["Team Tokens", 5],
	["Pre-sale", 30],
	["Initial Liquidity", 24],
	["Farming rewards", 8],
	["Marketing & CEX Listing", 8],
	["Future Development", 10],
	["Charity", 10],
	["Community Rewards", 5],
];

export const Piechart = () => {
	const canvas = useRef();

	useEffect(() => {
		const ctx = canvas.current;

		let chartStatus = Chart.getChart("myChart");
		if (chartStatus != undefined) {
			chartStatus.destroy();
		}

		const chart = new Chart(ctx, {
			type: "pie",
			data: {
				labels: ["Lions", "Monkeys", "Zebras", "Eagles", "Horses"],
				datasets: [
					{
						label: "Dataset 1",
						data: [12, 19, 3, 2, 3],
						backgroundColor: [
							"rgba(255, 99, 132, 0.2)",
							"rgba(54, 162, 235, 0.2)",
							"rgba(255, 206, 86, 0.2)",
							"rgba(75, 192, 192, 0.2)",
							"rgba(153, 102, 255, 0.2)",
							"rgba(255, 159, 64, 0.2)",
						],
						borderColor: [
							"rgba(255, 99, 132, 1)",
							"rgba(54, 162, 235, 1)",
							"rgba(255, 206, 86, 1)",
							"rgba(75, 192, 192, 1)",
							"rgba(153, 102, 255, 1)",
							"rgba(255, 159, 64, 1)",
						],
						borderWidth: 1,
					},
				],
			},
			options: {
				responsive: true,
				plugins: {
					legend: {
						position: "top",
					},
					title: {
						display: true,
						text: "Number of animals in the zoo",
					},
				},
			},
		});
	}, []);
	return (
		<div className="relative mx-auto h-[50vh] w-[50vw] flex items-start justify-center">
			<canvas ref={canvas}></canvas>
		</div>
	);
};
