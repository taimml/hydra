'use client'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";
import { ArrowDown } from "@/components/icons/ArrowDown";
import Image from "next/image";

import women from "@/public/women.svg";
import womenmob from "@/public/womenmob.svg";
import hydraTech1 from "@/public/Hydra-Tech1 1.svg";
import hydraTech2 from "@/public/Hydra-Tech2 1.svg";
import hydraTech3 from "@/public/Hydra-Tech3 1.svg";
import hydraTech4 from "@/public/Hydra-Tech4 1.svg";

export default function TechnologiesHardwareMain() {
    const mobileCarouselItems = [
        {
            id:1,
            pic:hydraTech1,
        },
        {
            id:2,
            pic:hydraTech3,
        },
        {
            id:3,
            pic:hydraTech2,
        },
        {
            id:4,
            pic:hydraTech4,
        },
        
    ]
    return(
        <section id="technologies">
            <div className="relative lg:mb-10">
                <div className="" >
                    <Image src={women} alt="women" className="hidden lg:block"/>
                    <Image src={womenmob} alt="women" className="lg:hidden w-screen " />
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
                <Image src={hydraTech1} alt="1" />
                <Image src={hydraTech3} alt="3" />
                <Image src={hydraTech2} alt="2" />
                <Image src={hydraTech4} alt="4" />
            </div>
            <div className="lg:hidden">
                <Carousel>
                    <CarouselContent>
                        {mobileCarouselItems.map((item) => (
                            <CarouselItem key={item.id}>
                                <div>
                                    <div className="flex justify-center items-center">
                                        <Image src={item.pic} alt="" className="w-60" />
                                    </div>
                                </div>
                            </CarouselItem>    
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                </Carousel>
            </div>
        </section>
        

    )
}