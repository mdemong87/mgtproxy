import Image from "next/image";
import { BiRightArrowAlt } from "react-icons/bi";
import check from "../../public/check.png";
import Container from "./Container";

export default function Checkout() {
    return (
        <div className="bg-gray-950">
            <Container>
                <div className="bg-gray-200 px-5 py-1 grid gap-5 grid-cols-3 justify-center items-center">
                    <div>
                        <Image src={check} alt="checkoutImage" height={`500`} width={`500`} />
                    </div>
                    <div className="col-span-2">
                        <div>
                            <h2 className="text-2xl pColor font-bold">CHECK OUT OUR NEW</h2>
                            <h1 className="text-3xl pColor font-bold">PROXY BOOSTER PACK !</h1>
                        </div>
                        <div className="mt-5 text-gray-900">
                            <h3 className="text-xl font-bold">16 MTG proxy cards of HIGH value</h3>
                            <p className="text-lg">We’ve gathered the rarest and most expensive proxy cards in the entire MTG World and created these amazing Proxy <b className="pColor">Booster Packs.</b></p>

                            <p className="mt-3 text-lg font-medium">
                                Open this booster pack and discover a truly unmatched experience. Pull the cards you wish you could pull normally. <b>PERFECT</b> add-on for Draft.
                            </p>
                        </div>
                        <button className=" mt-6 py-2 px-3 text-white pBg rounded-3xl flex gap-3 items-center cursor-pointer">
                            <span>Order Now</span>
                            <div className="py-1 px-1 bg-white rounded-full">
                                <BiRightArrowAlt className="text-black text-xl" />
                            </div>
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
