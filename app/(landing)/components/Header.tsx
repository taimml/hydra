'use client';

import Image from "next/image";
import { useState } from "react";
import logo1 from "@/public/logo1.svg"
import { Hamburger } from "@/components/icons/Hamburger";

export default function Header() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <header className="flex justify-between items-center font-bold lg:px-24 px-4 mt-4">
            <Image src={logo1} alt="logo"/>
            <button 
                className="lg:hidden"
                onClick={() => setIsMobileOpen(true)}
            >
                <Hamburger/>
            </button>
            <div className="gap-8 hidden lg:flex">
                <a href="#">ABOUT</a>
                <a href="#">SERVICES</a>
                <a href="#">TECHNOLOGIES</a>
                <a href="#">HOW TO</a>
            </div>
            <div className="lg:flex hidden gap-4">
                <button className="border-2 px-6 py-2 rounded-full cursor-pointer">
                    CONTACT US
                </button>
                <button className="max-w-xs bg-linear-to-r py-4 px-6 from-[#8176AF] to-[#C0B7E8] text-mypurple rounded-4xl cursor-pointer">
                    JOIN HYDRA
                </button>
            </div>
            

            {isMobileOpen && (
                <div className="fixed inset-0 bg-gray-950 z-50 flex flex-col p-6">
                    <div className="flex justify-end">
                        <button 
                            onClick={() => setIsMobileOpen(false)}
                            className="text-white text-2xl"
                        >
                            ✕
                        </button>
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-center gap-8 text-2xl font-bold">
                        <a href="#">ABOUT</a>
                        <a href="#">SERVICES</a>
                        <a href="#">TECHNOLOGIES</a>
                        <a href="#">HOW TO</a>
                    </div>
                    
                    <div className="space-y-4 font-bold">
                        <button className="w-full border-2 py-4 rounded-full text-white">
                            CONTACT US
                        </button>
                        <button className="w-full bg-linear-to-r py-4 px-26 from-[#8176AF] to-[#C0B7E8] text-mypurple rounded-4xl cursor-pointer">
                            JOIN HYDRA
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}