// ReactJS
import Image from "next/image";

// Local imports
import { SectionContainer } from "./skeleton/SectionContainer";

// Libraries
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

// Assets
import logo from "@/img/logo-2.png";

export const Splash = () => {
	return (
		<SectionContainer className="h-screen w-screen bg-splash bg-cover bg-no-repeat overflow-hidden">
			<div className="flex flex-col items-center justify-center text-center gap-20">
				<Image
					src={logo}
					alt="Logo"
					className="lg:absolute lg:left-10 h-96 w-96"
				/>
				<div className="pt-[10%]">
					<ClimbingBoxLoader
						speedMultiplier="0.8"
						color="#fff"
						size={"25px"}
						className=""
					/>
				</div>
			</div>
		</SectionContainer>
	);
};
