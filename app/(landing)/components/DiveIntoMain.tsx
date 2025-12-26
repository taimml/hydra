'use client'
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";
import { ArrowRight } from "@/components/icons/ArrowRight";
import { Call } from "@/components/icons/Call";
import { Mail } from "@/components/icons/mail";
import Image from "next/image";

import linii2 from "@/public/linii2.svg";
import linii1 from "@/public/linii1.svg";
import frame10 from "@/public/Frame 10.svg";
import moblin from "@/public/moblin.svg";
import bigmob from "@/public/bigmob.svg";
import locationIcon from "@/public/Location-Icon.svg";
import phoneCall from "@/public/phone-call.svg";
import mailIcon from "@/public/mail.svg";
import { Locate } from "@/components/icons/Locate";


export default function DiveIntoMain() {
    const [diveText, setDiveText] = useState("");
    useEffect(() => {
        fetch('/api/info/DIVE_INTO_TEXT')
            .then(res => res.json())
            .then(data => {
                if (data.content) {
                    setDiveText(data.content);
                }
            })
            .catch(error => {
                console.error("Ошибка загрузки текста:", error);
                setDiveText("Ошибка загрузки текста");
            });
    }, []);

    const mobileCarouselItems = [
        {
            id:1,
            pic: locationIcon,
            text:"Union St, Seattle, WA 98101, United States",
        },
        {
            id:2,
            pic: phoneCall,
            text:"(110) 1111-1010",
        },
        {
            id:3,
            pic: mailIcon,
            text:"Contact@HydraVTech.com",
        }
    ];
    return (
        <div>
            <div className="relative hidden lg:block">
                <div className="absolute lg:-left-30 top-55 -translate-y-1/2 -z-10">
                    <Image src={linii2} alt="2" />
                </div>
                <div className="absolute -right-20 -top-60 -z-10">
                    <Image src={linii1} alt="1" />
                </div>
                <div className="flex justify-between mb-22">
                    <div className="hidden lg:flex flex-col gap-10">
                        <div className="font-bold">
                            <h1 className="text-[40px]"><span className="text-[46px] bg-linear-to-r from-[#C0B7E8] to-[#8176AF] bg-clip-text text-transparent">Dive</span> Into The Depths</h1>
                            <h1 className="text-[40px]">Of <span className="text-[46px] bg-linear-to-r from-[#C0B7E8] to-[#8176AF] bg-clip-text text-transparent">Virtual Reality</span></h1>
                        </div>
                        <div>
                            <p className="font-light max-w-100">{diveText}</p>
                        </div>
                        <div className="flex gap-10 items-center">
                            <button className="text-xs text-mypurple font-extrabold bg-linear-to-r from-[#8176AF] to-[#C0B7E8] py-4 px-10 rounded-4xl cursor-pointer">BUILD YOUR WORLD</button>
                            <ArrowRight/>
                        </div>
                        
                    </div>
                    <div>
                        <Image src={frame10} alt="frame" />
                    </div>
                </div>
                <div className="flex justify-between bg-radial from-[#3A3456] to-[#211E2E] rounded-[100px] px-16 py-10">
                    <div className="flex items-center gap-6">
                        <Locate/>
                        <div>
                            <h2 className="text-2xl font-bold">Pay Us a Visit</h2>
                            <p className="text-sm">Union St, Seattle, WA 98101, United States</p>
                        </div>
                    </div>
                    <div className="border-l border-white/20 "></div>
                    <div className="flex items-center gap-6">
                        <Call/>
                        <div>
                            <h2 className="text-2xl font-bold">Give Us a Call</h2>
                            <p className="text-sm">(110) 1111-1010</p>
                        </div>
                    </div>
                    <div className="border-l border-white/20 "></div>
                    <div className="flex items-center gap-6">
                        <Mail/>
                        <div>
                            <h2 className="text-2xl font-bold">Send Us a Message</h2>
                            <p className="text-sm">Contact@HydraVTech.com</p>
                        </div>
                    </div>
                </div>
            </div>    
            <div className="relative items-center lg:hidden flex flex-col -mt-10">
                <div className="absolute -z-10 -translate-y-1/5">
                    <Image src={moblin} alt="mob" />
                </div>
                <Image src={bigmob} alt="big" className="w-screen" />
                <div className="flex flex-col">
                    <div className="flex flex-col font-bold my-10 gap-4 text-center">
                            <h1 className="text-2xl"><span className="text-4xl bg-linear-to-r from-[#C0B7E8] to-[#8176AF] bg-clip-text text-transparent">Dive</span> Into The Depths</h1>
                            <h1 className="text-2xl">Of <span className="text-[32px] bg-linear-to-r from-[#C0B7E8] to-[#8176AF] bg-clip-text text-transparent">Virtual Reality</span></h1>
                    </div>
                    <button className="text-sm text-mypurple font-extrabold bg-linear-to-r from-[#8176AF] to-[#C0B7E8] py-4 rounded-4xl cursor-pointer">BUILD YOUR WORLD</button>
                </div>
                <div className="w-full  mt-10 ">
                    <Carousel className="w-full">
                        <CarouselContent>
                            {mobileCarouselItems.map((item) => (
                                <CarouselItem key={item.id}>
                                    <div className="bg-radial from-[#3A3456] to-[#211E2E] rounded-[100px] p-8 flex items-center gap-4">
                                        <div>
                                            <Image src={item.pic} alt="" className=""/>
                                        </div>
        
                                        <div>
                                            <p className="text-sm text-gray-300 mt-1">{item.text}</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        
                        <CarouselPrevious className="left-4" />
                        <CarouselNext className="right-4" />
                    </Carousel>
                </div>
            </div>
        </div>
        
    )
}