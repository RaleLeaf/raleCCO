import React from "react";
import Header from "./Header";

function CheckoutPage() {

    const handleButtonClick = (event) => {
        const button = event.currentTarget;
        button.classList.add("scale-95", "bg-gray-300");
        setTimeout(() => {
            button.classList.remove("scale-95", "bg-gray-300");
        }, 150);
    };

    return (
        
        <div className="w-full h-screen">
            <Header />
            <div className="relative bg-gray-200 p-5 w-full h-auto drop-shadow-xl">
                <div
                    className="absolute font-bold drop-shadow-2xl font-archivo-black text-[11vw] tracking-tighter text-white"
                    style={{
                        top: "15%",
                        left: "49%",
                        transform: "translate(-50%, -50%) scaleX(1.4)",
                        whiteSpace: "nowrap",
                    }}>
                    CHECKOUT
                </div>

                <div className="bg-white z-10 flex flex-col p-5 mx-[10%] gap-4 rounded-2xl relative top-[12vh]">
                    <div className="flex flex-row text-lg">
                        <div className="w-1/2">
                            <div>Product</div>
                        </div>
                        <div className="w-1/2 flex justify-between">
                            <div>Price</div>
                            <div>Quantity</div>
                            <div>Total Price</div>
                        </div>
                    </div>


                    <div className="relative bg-gray-200 p-4 rounded-xl h-auto flex flex-row">
                        <div className="w-1/2 flex gap-3 flex-row">
                            <div className="relative w-[12vw]">
                                <img src="/rale1.png" alt="rale" className=" absolute p-3 rounded-3xl z-1 drop-shadow-lg" />
                                <div className=" bg-white w-[12vw] h-[12vw] rounded-xl"></div>
                            </div>
                            <div className="my-auto">
                                <div className="text-lg text-gray-400">T-Shirt</div>
                                <div className="text-3xl">Do Not Disturb Tee</div>
                                <div className="">T-Shirt</div>
                            </div>
                        </div>
                        <div className="w-1/2 flex justify-between">
                            <div className="my-auto text-xl text-gray-500 italic">₱499.00</div>
                            <div className="text-xl flex my-auto flex-row border-2 border-black rounded-xl">
                                <button
                                    onClick={handleButtonClick}
                                    className="border-y-1 p-1 px-2 rounded-xl border-black transition-all duration-150">
                                    -
                                </button>
                                <div className="border-1 p-1 px-3 border-black">1</div>
                                <button
                                    onClick={handleButtonClick}
                                    className="border-y-1 p-1 px-2 rounded-xl border-black transition-all duration-150">
                                    +
                                </button>
                            </div>
                            <div className="my-auto text-xl text-gray-500 italic">₱499.00</div>
                        </div>
                    </div>

                    <div className="relative bg-gray-200 p-4 rounded-xl h-auto flex flex-row">
                        <div className="w-1/2 flex gap-3 flex-row">
                            <div className="relative w-[12vw]">
                                <img src="/strapped.png" alt="rale" className=" absolute p-3 rounded-3xl z-1 drop-shadow-lg" />
                                <div className=" bg-white w-[12vw] h-[12vw] rounded-xl"></div>
                            </div>
                            <div className="my-auto">
                                <div className="text-lg text-gray-400">T-Shirt</div>
                                <div className="text-3xl">Strapped Tee</div>
                                <div className="">T-Shirt</div>
                            </div>
                        </div>
                        <div className="w-1/2 flex justify-between">
                            <div className="my-auto text-xl text-gray-500 italic">₱499.00</div>
                            <div className="text-xl flex my-auto flex-row border-2 border-black rounded-xl">
                                <button
                                    onClick={handleButtonClick}
                                    className="border-y-1 p-1 px-2 rounded-xl border-black transition-all duration-150">
                                    -
                                </button>
                                <div className="border-1 p-1 px-3 border-black">1</div>
                                <button
                                    onClick={handleButtonClick}
                                    className="border-y-1 p-1 px-2 rounded-xl border-black transition-all duration-150">
                                    +
                                </button>
                            </div>
                            <div className="my-auto text-xl text-gray-500 italic">₱499.00</div>
                        </div>
                    </div>
                </div>

                <div className="bg-white z-10 flex p-4 mx-[10%] gap-4 flex-row justify-between rounded-2xl relative top-[15vh]">
                    <div className="flex flex-row gap-4">
                        <div className="text-xl my-auto">Total Cost: </div>
                        <div className="text-6xl my-auto">₱998.00</div>
                    </div>
                    <button onClick={handleButtonClick} className="bg-gray-200 w-[18vw] my-auto grid justify-items-center p-3 text-2xl rounded-xl">Checkout</button>
                </div>

            </div>
        </div>
    );
}

export default CheckoutPage;
