export default function JoinHydraMain() {
    return(
        <div className="bg-radial from-[#403A5F] to-[#211E2E] lg:rounded-[100px] rounded-4xl p-12 shadow-2xl">
            <div className="flex flex-col text-center mb-10 items-center">
                <h2 className="lg:text-[36px] text-2xl font-bold text-white">JOIN HYDRA</h2>
                <img src="Vector 16.svg" alt="16" className="my-6" />
                <p className="lg:text-[36px] text-2xl font-light text-white hidden lg:block">Let's Build Your VR Experience</p>
                <p className="lg:text-[36px] text-2xl font-light text-white lg:hidden ">Let's Build</p>
                <p className="lg:text-[36px] text-2xl font-light text-white lg:hidden ">Your VR Experience</p>
            </div>

            <form className=" space-y-8 text-sm">
                <div className="grid lg:grid-cols-2 gap-8">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="w-full border-2 border-white rounded-[40px] px-8 py-5 text-white placeholder-white"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full border-2 border-white rounded-[40px] px-8 py-5 text-white placeholder-white"
                    />
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border-2 border-white rounded-[40px] px-8 py-5 text-white placeholder-white"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full border-2 border-white rounded-[40px] px-8 py-5 text-white placeholder-white"
                    />
                </div>

                <input
                    type="text"
                    placeholder="Subject"
                    className="w-full border-2 border-white rounded-[40px] px-8 py-5 text-white placeholder-white"
                />

                <textarea
                    placeholder="Tell Us Something..."
                    className="w-full border-2 border-white rounded-[40px] px-8 lg:py-20 py-8 text-white placeholder-white lg:text-center h-50"
                />

                <div className="text-center pt-6">
                    <button className="bg-linear-to-r from-[#8176AF] to-[#C0B7E8] text-gray-900 lg:px-14 py-4 rounded-[40px] font-bold text-sm w-full lg:max-w-3xs cursor-pointer">
                        SEND TO HYDRA
                    </button>
                </div>
            </form>
        </div>       
    )
}