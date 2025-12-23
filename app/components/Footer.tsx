export default function Footer() {
    return(
        <footer className="flex flex-col gap-14 relative items-center w-full px-4">
            <div className="absolute -z-10 -top-1/3 hidden lg:block w-full">   
                <img src="linii6.svg" alt="" className="w-full" />
            </div>
            <div className="absolute lg:hidden -z-10 top-24 w-full">
                <img src="Group 6.svg" alt="6" className="w-full" />
            </div>

            <div className="w-full max-w-7xl flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-10 lg:gap-4 mt-30">
                <img src="logo2.svg" alt="2" className="h-20 lg:h-full" />
                <img src="Vector 20.svg" alt="20" className="hidden lg:block" />
                <div className="lg:flex flex-col gap-6 font-bold hidden">
                    <p>ABOUT</p>
                    <p>SERVICES</p>
                    <p>TECHNOLOGIES</p>
                    <p>HOW TO</p>
                    <p>JOIN HYDRA</p>
                </div>
                <img src="Vector 20.svg" alt="20" className="hidden lg:block" />
                <div className="lg:flex flex-col gap-6 font-bold hidden">
                    <p>F.A.Q</p>
                    <p>SITEMAP</p>
                    <p>CONDITIONS</p>
                    <p>LICENSES</p>
                </div>
                <img src="Vector 20.svg" alt="20" className="hidden lg:block" />
                
                <div className="flex flex-col font-bold gap-6 items-center lg:items-start w-full lg:w-auto">
                    <p>SOCIALIZE WITH HYDRA</p>
                    <div className="flex gap-4">
                        <img src="facebook.svg" alt="" />
                        <img src="twitter.svg" alt="" />
                        <img src="linkedin.svg" alt="" />
                        <img src="youtube.svg" alt="" />
                        <img src="instagram.svg" alt="" />
                        <img src="pinterest.svg" alt="" />
                    </div>
                    <button className="gradient-purple bg-linear-to-r from-[#8176AF] to-[#C0B7E8] text-gray-900 w-full lg:w-auto px-8 py-4 rounded-[40px] font-bold text-xs">
                        BUILD YOUR WORLD
                    </button>
                </div>
            </div>
            <img src="Vector 17.svg" alt="17" className="hidden lg:block w-full max-w-7xl"/>
            <img src="Vector 25.svg" alt="25" className="lg:hidden w-full max-w-7xl" />

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
    )
}