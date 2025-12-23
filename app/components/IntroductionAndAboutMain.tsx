export default function IntroductionAndAboutMain() {
    return(
        <div className="relative">
            <div className="absolute -z-10 top-65">
                <img src="linii3.svg" alt="3" />
            </div>
            <div className="flex justify-between">
                <div className="hidden lg:block">
                    <h1 className="text-4xl font-bold">INTRODUCTION</h1>
                    <div className="flex items-center gap-7">
                        <p className="text-4xl font-light">TO HYDRA VR</p>
                        <img src="Component 1.svg" alt="comp" />
                    </div>
                </div>
                    <p className="max-w-xl hidden lg:block">Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                    nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                    lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
            </div>  
            <div className="flex flex-col lg:flex-row mt-15 justify-between items-center gap-11 lg:gap-0">
                <div className="lg:hidden flex flex-col items-center text-[26px]">
                    <p className="font-bold">INTRODUCTION</p>
                    <p className="font-light">TO HYDRA VR</p>
                </div>
                <img src="Mask group.svg" alt="mask" />
                <div className="flex flex-col gap-9">
                    <div className="text-4xl hidden lg:block">
                        <p className="font-bold">ABOUT</p>
                        <p className="font-light">HYDRA VR</p>
                    </div>
                    <p className="lg:max-w-139 lg:text-[16px] text-xs">Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
                        urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
                        dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
                        Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
                        sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
                        etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
                        cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                        retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudin tempor.</p>
                        <button className="lg:text-xs text-sm text-mypurple bg-linear-to-r from-[#8176AF] to-[#C0B7E8] py-4 rounded-4xl font-bold mx-auto lg:mx-0 lg:max-w-55 max-w-3xs w-full">LET'S GET IN TOUCH</button>
                </div>
            </div> 
        </div>
        
    )
}