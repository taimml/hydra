import Image from "next/image";

import lini6 from "@/public/linii6.svg";
import logo2 from "@/public/logo2.svg";

import vector20 from "@/public/Vector 20.svg";
import vector17 from "@/public/Vector 17.svg";
import vector25 from "@/public/Vector 25.svg";

import facebook from "@/public/facebook.svg";
import twitter from "@/public/twitter.svg";
import linkedin from "@/public/linkedin.svg";
import youtube from "@/public/youtube.svg";
import instagram from "@/public/instagram.svg";
import pinterest from "@/public/pinterest.svg";

export default function Footer() {
	return (
		<footer className="flex flex-col gap-14 relative items-center w-full px-4">
			<div className="absolute -z-10 -top-1/3 hidden lg:block w-full">
				<Image src={lini6} alt="" className="w-full" />
			</div>

			<div className="absolute lg:hidden -z-10 top-24 w-full">
				<Image src={logo2} alt="" className="w-full" />
			</div>

			<div className="w-full max-w-7xl flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-10 lg:gap-4 mt-30">
				<Image src={logo2} alt="Hydra logo" className="h-20 lg:h-full w-auto" />

				<Image src={vector20} alt="" className="hidden lg:block" />

				<div className="lg:flex flex-col gap-6 font-bold hidden">
					<p>ABOUT</p>
					<p>SERVICES</p>
					<p>TECHNOLOGIES</p>
					<p>HOW TO</p>
					<p>JOIN HYDRA</p>
				</div>

				<Image src={vector20} alt="" className="hidden lg:block" />

				<div className="lg:flex flex-col gap-6 font-bold hidden">
					<p>F.A.Q</p>
					<p>SITEMAP</p>
					<p>CONDITIONS</p>
					<p>LICENSES</p>
				</div>

				<Image src={vector20} alt="" className="hidden lg:block" />

				<div className="flex flex-col font-bold gap-6 items-center lg:items-start w-full lg:w-auto">
					<p>SOCIALIZE WITH HYDRA</p>

					<div className="flex gap-4">
						<Image src={facebook} alt="facebook" />
						<Image src={twitter} alt="twitter" />
						<Image src={linkedin} alt="linkedin" />
						<Image src={youtube} alt="youtube" />
						<Image src={instagram} alt="instagram" />
						<Image src={pinterest} alt="pinterest" />
					</div>

					<button className="gradient-purple bg-linear-to-r from-[#8176AF] to-[#C0B7E8] text-gray-900 w-full lg:w-auto px-8 py-4 rounded-[40px] font-bold text-xs">
						BUILD YOUR WORLD
					</button>
				</div>
			</div>

			<Image
				src={vector17}
				alt=""
				className="hidden lg:block w-full max-w-7xl"
			/>

			<Image src={vector25} alt="" className="lg:hidden w-full max-w-7xl" />

			<div className="w-full max-w-7xl">
				<p className="text-sm font-bold text-center hidden lg:block">
					2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED
				</p>

				<p className="text-sm font-bold text-center lg:hidden tracking-widest leading-10">
					2023 © HYDRA LANDING PAGE <br />
					BY ZINE. E. FALOUTI <br />
					ALL RIGHTS RESERVED
				</p>
			</div>
		</footer>
	);
}
