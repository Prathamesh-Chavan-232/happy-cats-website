// Libraries
"use client";
import Chart from "chart.js/auto";
import { useRef, useEffect } from "react";

export const Piechart = () => {
	const canvas = useRef();

	useEffect(() => {
		const ctx = canvas.current;

		let chartStatus = Chart.getChart("myChart");
		if (chartStatus != undefined) {
			chartStatus.destroy();
		}

		const chart = new Chart(ctx, {
			type: "doughnut",
			width: "100%",
			data: {
				labels: [
					"Community rewards",
					"Team tokens",
					"Pre-sale",
					"Initial liquidity",
					"Forming rewards",
					"Charity",
					"Marketing & CEX listing",
					"Future development",
				],
				datasets: [
					{
						label: "Data",
						data: [5, 5, 30, 24, 8, 10, 8, 10],
						backgroundColor: [
							"rgba(255, 99, 132, 0.5)",
							"rgba(159,150,234,0.5)",
							"rgba(119,182,0,0.5)",
							"rgba(86,190,251, 0.5)",
							"rgba(255, 206, 86, 0.5)",
							"rgba(75, 192, 192, 0.5)",
							"rgba(153, 102, 255, 0.5)",
							"rgba(255, 159, 64, 0.5)",
						],
						color: "#000",
						fontSize: "18px",
						borderColor: ["rgba(41,32,86,1)"],
						borderWidth: 1.5,
					},
				],
			},
			options: {
				responsive: true,
				plugins: {
					legend: {
						position: "bottom",
						fontSize: "18px",
					},
				},
			},
		});
	}, []);
	return (
		<div className="my-[10%] mx-auto h-[50vh] w-full flex items-center justify-center">
			<canvas ref={canvas}></canvas>
		</div>
	);
};
