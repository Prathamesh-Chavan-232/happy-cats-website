import Image from "next/image";
import Link from "next/link";
export default function Home() {
	return (
		<main className="text-white">
			<header>
				<div className="px-40 py-8 flex items-center justify-between bg-primary text-white">
					<span>SOCIALS</span>
					<span>LOGO</span>
					<span>INTERACTION BUTTONS</span>
				</div>
				<div className="px-40 py-4 flex items-center justify-center bg-blue-400">
					<nav className="space-x-20">
						<Link href="">Home</Link>
						<Link href="">About</Link>
						<Link href="">NFTS</Link>
						<Link href="">Tokenomics</Link>
						<Link href="">Roadmap</Link>
						<Link href="">Social Media</Link>
					</nav>
				</div>
			</header>
			<div className="py-96 bg-red-300"></div>
			<div className="px-32 py-6 bg-primary font-bold flex justify-between">
				<span>COOL PETS {">"}</span>
				<span>COOL PETS {">"}</span>
				<span>COOL PETS {">"}</span>
			</div>

			<div className="w-screen h-screen bg-blue-200"></div>
			<div className="py-40 bg-primary"></div>
			<div className="py-96 bg-white text-black flex items-center justify-center">
				LATEST NEWS
			</div>
			<div className="py-40 bg-yellow-400 text-white flex items-center justify-center">
				MERCH
			</div>
		</main>
	);
}
