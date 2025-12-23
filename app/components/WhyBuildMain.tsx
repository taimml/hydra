'use client'
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";

export default function WhyBuildMain() {
    const mobileCarouselItems = [
        {
            id:1,
            pic:"Frame 29.svg",
            title:"SIMULATION",
            text:"Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
        },
        {
            id:2,
            pic:"Frame 34.svg",
            title:"EDUCATION",
            text:"Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
        }, 
        {
            id:3,
            pic:"Frame 35.svg",
            title:"SELF-CARE",
            text:"Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
        },
        {
            id:4,
            pic:"Frame 36.svg",
            title:"OUTDOOR",
            text:"Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
        },
    ]
    return(
        <div>
            <div className="relative hidden lg:block">
                <div className="absolute -z-10 -left-20 top-110">
                    <img src="linii42.svg" alt="42" />
                </div>
                <div className="absolute -z-10 -right-20 top-1/3">
                    <img src="linii52.svg" alt="52" />
                </div>
                <div className="flex justify-between mb-16">
                    <div>
                        <h1 className="text-4xl font-bold">WHY BUILD</h1>
                        <div className="flex items-center gap-7">
                            <p className="text-4xl font-light">WITH HYDRA?</p>
                            <img src="Component 1.svg" alt="comp" />
                        </div>
                    </div>
                        <p className="max-w-xl">Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
                </div>
                <div className="flex justify-between gap-3">
                    <div className="flex flex-col items-center bg-radial from-[#433D60] to-[#211E2E] rounded-4xl gap-7 py-6 px-6">
                        <img src="Frame 29.svg" alt="29" />
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
                        <img src="Frame 34.svg" alt="29" />
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
                        <img src="Frame 35.svg" alt="29" />
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
                        <img src="Frame 36.svg" alt="29" />
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
                                        <img src={item.pic} alt="" />
                                        <div className="flex flex-col items-center mb-6">
                                            <p className="text-2xl font-bold">{item.title}</p>
                                            <div className="border border-[#C0B7E8]/30 my-6 w-full max-w-40"/>
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
        </div>
        
    )
}