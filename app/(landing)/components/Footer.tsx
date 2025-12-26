"use client";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

import lini6 from "@/public/linii6.svg";
import logo2 from "@/public/logo2.svg";
import vector20 from "@/public/Vector 20.svg";
import vector17 from "@/public/Vector 17.svg";
import vector25 from "@/public/Vector 25.svg";

import facebookIcon from "@/public/facebook.svg";
import twitterIcon from "@/public/twitter.svg";
import linkedinIcon from "@/public/linkedin.svg";
import youtubeIcon from "@/public/youtube.svg";
import instagramIcon from "@/public/instagram.svg";
import pinterestIcon from "@/public/pinterest.svg";


type SocialLink = {
    id: string;
	name: string;
	url: string;
};

const iconNames = ['facebook', 'twitter', 'linkedin', 'youtube', 'instagram', 'pinterest'] as const;
type IconName = typeof iconNames[number];

export default function Footer() {
	const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('/api/social')
		.then(res => res.json())
		.then(data => {
            console.log("Social links response:", data);
                if (data.success) {
                    setSocialLinks(data.data || []);
                } else {
                    console.error("API returned error:", data.error);
                    setSocialLinks([]);
                }
            })
		.catch(error => {
			console.error('Error:', error);
			setLoading(false);
		})
		.finally(() => {
			setLoading(false);
		});
	}, []);

	const icons: Record<IconName, StaticImageData> = {
		facebook: facebookIcon,
		twitter: twitterIcon,
		linkedin: linkedinIcon,
		youtube: youtubeIcon,
		instagram: instagramIcon,
		pinterest: pinterestIcon,
	} ;
	function isIconName(name: string): name is IconName {
		return iconNames.includes(name as IconName);
}

	const getIcon = (name: string): StaticImageData | null => {
		const normalizedName = name.toLowerCase().trim();
		
		if (isIconName(normalizedName)) {
			return icons[normalizedName];
		}
		
		return null;
	};

	return (
		<footer className="flex flex-col gap-14 relative items-center w-full px-4">
			<div className="absolute -z-10 -top-1/3 hidden lg:block w-full">
				<Image src={lini6} alt="" className="w-full" />
			</div>

			<div className="w-full max-w-7xl flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-10 lg:gap-4 mt-30">
				<Image src={logo2} alt="Hydra logo" className="h-60 lg:h-full w-auto" />

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
					{loading ? (
						<p>Loading...</p>
					) : socialLinks.length > 0 ? (
						socialLinks.map(link => {
							const icon = getIcon(link.name);
							return (
								<a
									key={link.id}
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									className="hover:opacity-80"
									title={link.name}
								>
									{icon ? (
										<Image
											src={icon}
											alt={link.name}
											width={24}
											height={24}
										/>
									) : (
										<span className="text-xs">{link.name}</span>
									)}
								</a>
							);
						})
					) : (
						<p className="text-sm text-gray-500">No social links available</p>
					)}
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
