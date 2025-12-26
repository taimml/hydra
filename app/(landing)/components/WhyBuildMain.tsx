"use client"
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

import linii42 from "@/public/linii42.svg";
import linii52 from "@/public/linii52.svg";
import component1 from "@/public/Component 1.svg";
import frame29 from "@/public/Frame 29.svg";
import frame34 from "@/public/Frame 34.svg";
import frame35 from "@/public/Frame 35.svg";
import frame36 from "@/public/Frame 36.svg";

export default function WhyBuildMain() {
    const [whyBuildText, setWhyBuildText] = useState("");
    
    useEffect(() => {
        fetch('/api/info/WHY_BUILD_TEXT')
            .then(res => res.json())
            .then(data => {
                if (data.content) {
                    setWhyBuildText(data.content);
                }
            })
            .catch(error => {
                console.error("Ошибка загрузки текста:", error);
                setWhyBuildText("Ошибка загрузки текста.");
            });
    }, []);
    
    const mobileCarouselItems = [
        {
            id:1,
            pic:frame29,
            title:"SIMULATION",
            text:"Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
        },
        {
            id:2,
            pic:frame34,
            title:"EDUCATION",
            text:"Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
        }, 
        {
            id:3,
            pic:frame35,
            title:"SELF-CARE",
            text:"Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
        },
        {
            id:4,
            pic:frame36,
            title:"OUTDOOR",
            text:"Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
        },
    ]
    
    return(
        <section id="services">
                <div className="relative hidden lg:block">
                    <div className="absolute -z-10 -left-20 top-110">
                        <Image src={linii42} alt="42" />
                    </div>
                    <div className="absolute -z-10 -right-20 top-1/3">
                        <Image src={linii52} alt="52" />
                    </div>
                    <div className="flex justify-between mb-16">
                        <div>
                            <h1 className="text-4xl font-bold">WHY BUILD</h1>
                            <div className="flex items-center gap-7">
                                <p className="text-4xl font-light">WITH HYDRA?</p>
                                <Image src={component1} alt="comp" />
                            </div>
                        </div>
                        <p className="max-w-xl">
                            {whyBuildText}
                        </p>
                    </div>
                    <div className="flex justify-between gap-3">
                        <div className="flex flex-col items-center bg-radial from-[#433D60] to-[#211E2E] rounded-4xl gap-7 py-6 px-6">
                            <Image src={frame29} alt="29" />
                            <div className="flex flex-col items-center">
                                <p className="text-2xl font-bold">SIMULATION</p>
                                <div className="border border-[#C0B7E8]/30 my-4 w-full max-w-40"/>
                                <p className="text-xs ">Vitae sapien pellentesque habitant morbi
                                    nunc. Viverra aliquet  porttitor rhoncus 
                                    libero justo laoreet sit amet vitae.</p>
                            </div>
                            <button className="text-xs font-extrabold px-10 py-4 rounded-3xl bg-linear-to-r from-[#8176AF] to-[#C0B7E8] text-mypurple">TRY IT NOW</button>
                        </div>
                        <div className="flex flex-col items-center bg-radial from-[#433D60] to-[#211E2E] rounded-4xl gap-7 py-6 px-6">
                            <Image src={frame34} alt="29" />
                            <div className="flex flex-col items-center">
                                <p className="text-2xl font-bold">EDUCATION</p>
                                <div className="border border-[#C0B7E8]/30 my-4 w-full max-w-40"/>
                                <p className="text-xs ">Vitae sapien pellentesque habitant morbi
                                    nunc. Viverra aliquet  porttitor rhoncus 
                                    libero justo laoreet sit amet vitae.</p>
                            </div>
                            <button className="text-xs font-extrabold px-10 py-4 rounded-3xl bg-linear-to-r from-[#8176AF] to-[#C0B7E8] text-mypurple">TRY IT NOW</button>
                        </div>
                        <div className="flex flex-col items-center bg-radial from-[#433D60] to-[#211E2E] rounded-4xl gap-7 py-6 px-6">
                            <Image src={frame35} alt="29" />
                            <div className="flex flex-col items-center">
                                <p className="text-2xl font-bold">SELF-CARE</p>
                                <div className="border border-[#C0B7E8]/30 my-4 w-full max-w-40"/>
                                <p className="text-xs ">Vitae sapien pellentesque habitant morbi
                                    nunc. Viverra aliquet  porttitor rhoncus 
                                    libero justo laoreet sit amet vitae.</p>
                            </div>
                            <button className="text-xs font-extrabold px-10 py-4 rounded-3xl bg-linear-to-r from-[#8176AF] to-[#C0B7E8] text-mypurple">TRY IT NOW</button>
                        </div>
                        <div className="flex flex-col items-center bg-radial from-[#433D60] to-[#211E2E] rounded-4xl gap-7 py-6 px-6">
                            <Image src={frame36} alt="29" />
                            <div className="flex flex-col items-center">
                                <p className="text-2xl font-bold">OUTDOOR</p>
                                <div className="border border-[#C0B7E8]/30 my-4 w-full max-w-40"/>
                                <p className="text-xs ">Vitae sapien pellentesque habitant morbi
                                    nunc. Viverra aliquet  porttitor rhoncus 
                                    libero justo laoreet sit amet vitae.</p>
                            </div>
                            <button className="text-xs font-bold px-10 py-4 rounded-3xl bg-linear-to-r from-[#8176AF] to-[#C0B7E8] text-mypurple">TRY IT NOW</button>
                        </div>
                    </div>
                </div>    
                <div className="lg:hidden">
                    <div className="flex flex-col items-center text-[26px] mb-6">
                        <p className="font-bold">WHY BUILD</p>
                        <p className="font-light">WITH HYDRA?</p>
                    </div>
                    <div>
                        <Carousel>
                            <CarouselContent>
                                {mobileCarouselItems.map((item) => (
                                    <CarouselItem key={item.id}>
                                        <div className="bg-radial from-[#3A3456] to-[#211E2E] rounded-[40px] p-8 flex flex-col items-center gap-4">
                                            <Image src={item.pic} alt="" />
                                            <div className="flex flex-col items-center mb-6">
                                                <p className="text-2xl font-bold">{item.title}</p>
                                                <p className="text-xs">{item.text}</p>
                                            </div>
                                            <button className="w-full text-xs font-bold py-4 rounded-4xl bg-linear-to-r from-[#8176AF] to-[#C0B7E8] text-mypurple">TRY IT NOW</button>
                                        </div>
                                    </CarouselItem>
                                ))}
                                
                            </CarouselContent>
                            <CarouselPrevious className="left-0" />
                            <CarouselNext className="right-0" />
                        </Carousel>
                    </div>
                </div>
            
        </section>
        
        
    )
}