'use client'
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";
import { ArrowDown } from "../icons/ArrowDown";

export default function TechnologiesHardwareMain() {
    const mobileCarouselItems = [
        {
            id:1,
            pic:"Hydra-Tech1 1.svg",
        },
        {
            id:2,
            pic:"Hydra-Tech3 1.svg",
        },
        {
            id:3,
            pic:"Hydra-Tech2 1.svg",
        },
        {
            id:4,
            pic:"Hydra-Tech4 1.svg",
        },
        
    ]
    return(
        <div className="">
            <div className="relative lg:mb-10">
                <div className="" >
                    <img src="women.svg" alt="women" className="hidden lg:block"/>
                    <img src="womenmob.svg" alt="women" className="lg:hidden w-screen " />
                    <div className="absolute inset-0 lg:text-4xl text-center flex flex-col items-center justify-center">
                        <p className="font-bold">TECHNOLOGIES & HARDWARE</p>
                        <p className="font-light text-2xl">USED BY HYDRA VR.</p>
                    </div>
                </div>
                <div className="hidden lg:block absolute bottom-0.5 top-63 left-1/2 transform -translate-x-1/2">
                    <ArrowDown/>
                </div>
            </div>   
            <div className="hidden lg:flex justify-between">
                <img src="Hydra-Tech1 1.svg" alt="1" />
                <img src="Hydra-Tech3 1.svg" alt="3" />
                <img src="Hydra-Tech2 1.svg" alt="2" />
                <img src="Hydra-Tech4 1.svg" alt="4" />
            </div>
            <div className="lg:hidden">
                <Carousel>
                    <CarouselContent>
                        {mobileCarouselItems.map((item) => (
                            <CarouselItem key={item.id}>
                                <div>
                                    <div className="flex justify-center items-center">
                                        <img src={item.pic} className="w-60" />
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
        

    )
}