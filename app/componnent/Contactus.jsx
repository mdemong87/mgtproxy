import { BiRightArrowAlt } from "react-icons/bi";
import { BsDiscord } from "react-icons/bs";
import Container from "./Container";

export default function Contactus() {
    return (
        <div className="bg-gray-200">
            <Container>
                <div className="text-black py-5">
                    <div className="text-center w-3/4 mx-auto">
                        <div className="py-8">
                            <h2 className="text-2xl font-bold">HAVE A QUESTIONS ?</h2>
                            <h1 className="text-3xl font-bold">CONTACT US !</h1>
                            <p className="pt-4 font-medium text-lg px-24">Looking for an update on your order / tracking order ? It's right here !
                                Need help with an order that has shipped/Label created ?</p>
                        </div>
                        <div className="">
                            <div className="flex gap-5">
                                <input className="w-full py-2 px-2 rounded-md" type="text" placeholder="Enter your
                                Name" />
                                <input className="w-full py-2 px-2 rounded-md" type="email" placeholder="Enter your Email" />
                                <input className="w-full py-2 px-2 rounded-md" type="number" placeholder="Order Number(If Any)" />
                            </div>
                            <div>
                                <textarea className="w-full py-2 px-2 rounded-md mt-5 h-52" placeholder="Write a Message..."></textarea>
                            </div>
                            <div className="flex gap-5 justify-between items-center">
                                <div>

                                    <div className="py-4 mt-3 px-4 items-center gap-4 bg-gray-100 flex rounded-md">
                                        <div className="bg-white h-10 rounded.sm w-10" />
                                        <span className="text-gray-500"> I'm not Roboto</span>
                                    </div>

                                </div>
                                <div>
                                    <button className=" mt-8 py-2 px-3 text-white pBg rounded-3xl flex gap-3 items-center cursor-pointer">
                                        <span>SEND MASSEGE</span>
                                        <div className="py-1 px-1 bg-white rounded-full">
                                            <BiRightArrowAlt className="text-black text-xl" />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pBg text-white rounded-lg translate-y-2/4 h-32 px-10 flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold">JOIN US ON DISCORD FOR</h2>
                        <h1 className="text-3xl font-bold">GIVEAWAYS & FREE PROXIES</h1>
                    </div>
                    <div className="flex gap-5 items-center py-3 px-3 rounded-lg bg-black">
                        <div>
                            <BsDiscord className="text-white text-6xl" />
                        </div>
                        <div className="flex text-center flex-col">
                            <p>Join</p>
                            <h1 className="text-3xl">Discord</h1>
                        </div>
                    </div>
                </div>
            </Container >
        </div >
    )
}
