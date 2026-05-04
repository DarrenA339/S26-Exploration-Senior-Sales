export default function homepage() {
    return(
        <div className="flex flex-col">
            <div className="w-full h-screen flex flex-row bg-white">
                <div className="relative w-1/3 h-full">
                    <img src="/Left.png" alt="Homepage Picture" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold flex-col gap-18">
                        <div>
                            {"It's that Time of the Year"}
                        </div>
                        <div>
                            Discounted Prices on All Items!
                        </div>
                        <div className="flex flex-col gap-y-4 justify-center items-center text-6xl">
                            <div>Everything</div>
                            <div>Must Go</div>
                        </div>
                        <button className="bg-red-900 hover:bg-red-500 text-white font-bold py-4 px-8 text-2xl rounded-full">
                            Shop Now
                        </button>
                    </div>
                </div>
                <img src="/middle.png" alt="Homepage Picture" className="w-1/3 h-full object-cover" />
                <img src="/right.png" alt="Homepage Picture" className="w-1/3 h-full object-cover" />
            </div>
        </div>
    )}