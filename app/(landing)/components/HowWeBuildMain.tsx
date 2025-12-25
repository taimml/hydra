'use client'
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";
import { SmallArrowRight } from "@/components/icons/SmallArrowRight";
import Image from "next/image";

import linii5 from "@/public/linii5.svg";
import component1 from "@/public/Component 1.svg";
import frame58 from "@/public/Frame 58.svg";
import frame60 from "@/public/Frame 60.svg";
import frame62 from "@/public/Frame 62.svg";
import frame64 from "@/public/Frame 64.svg";

export default function HowWeBuildMain() {
    const mobileCarouselItems = [
        {
            id:1,
            pic: frame58,
            text: "3D Conception & Design",
        },
        {
            id:2,
            pic: frame60,
            text: "Interaction Design",
        },
        {
            id:3,
            pic: frame62,
            text: "VR World User Testing",
        },
        {
            id:4,
            pic: frame64,
            text: "Hydra VR Deploy",
        },
    ]
    return(
        <div>
            <div className="relative hidden lg:block">
                <div className="absolute -z-10 top-55 ">
                    <Image src={linii5} alt="" />
                </div>
                <div className="flex justify-between mb-24">
                    <div>
                        <h1 className="text-4xl font-bold">HOW WE BUILD</h1>
                        <div className="flex items-center gap-7">
                            <p className="text-4xl font-light">WITH HYDRA VR?</p>
                            <Image src={component1} alt="comp" />
                        </div>
                    </div>
                        <p className="max-w-xl">Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
                </div>
                <div className="grid grid-cols-4">
                    <div className="flex flex-col items-center gap-4">
                        <Image src={frame58} alt="58" />
                        <div className="flex gap-4 items-center">
                            <SmallArrowRight/>
                            <p className="text-2xl font-bold max-w-50">3D Conception & Design</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Image src={frame60} alt="60" />
                        <div className="flex gap-4 items-center">
                            <SmallArrowRight/>
                            <p className="text-2xl font-bold max-w-50">Interaction Design</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Image src={frame62} alt="62" />
                        <div className="flex gap-4 items-center">
                            <SmallArrowRight/>
                            <p className="text-2xl font-bold max-w-40">VR World User Testing</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Image src={frame64} alt="64" />
                        <div className="flex gap-4 items-center">
                            <SmallArrowRight/>
                            <p className="text-2xl font-bold max-w-50">Hydra VR Deploy</p>
                        </div>
                    </div>
                </div>
            </div>    
            <div className="lg:hidden">
                <div className="flex flex-col items-center text-[26px] mb-8">
                    <p className="font-bold">HOW WE BUILD</p>
                    <p className="font-light">WITH HYDRA VR?</p>
                </div>
                <div>
                    <Carousel>
                        <CarouselContent>
                            {mobileCarouselItems.map((item) => (
                                <CarouselItem key={item.id}>
                                    <div className="flex flex-col gap-8 items-center text-center">
                                        <Image src={item.pic} alt="" />
                                        <p className="text-2xl font-bold max-w-50">{item.text}</p>
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