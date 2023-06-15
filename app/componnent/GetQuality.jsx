import Image from "next/image";
import { BiRightArrowAlt } from "react-icons/bi";
import get from "../../public/getquality.webp";
import Container from "./Container";

export default function GetQuality() {
    return (
        <div className="bg-white py-12">
            <Container>
                <div className="grid gap-5 grid-cols-3 justify-center items-center">
                    <div className="col-span-2">
                        <div>
                            <h2 className="text-2xl pColor font-bold">GET QUALITY</h2>
                            <h1 className="text-3xl pColor font-bold">& POKEMON PROXIES</h1>
                        </div>
                        <div className="mt-5">
                            <p className="text-lg">Buy MTG <b>proxy and Pokemon Proxy</b> at competitive prices, on-demand good quality proxies including custom and MTG proxy booster packs, fast and worldwide shipping.</p>

                            <p className="mt-3 text-lg font-medium">
                                We thrive to create affordable <b>on demand</b> MTG Proxy & Pokemon Proxy.
                                Our proxies are  original front <b>legal</b> proxies for sleeves that can be used for any <b>casual games</b>.
                                Over <b>22.630 MTG Proxy cards available</b> from all MTG series since ALPHA era.
                                Aswell as all 7800 Pokemon cards !
                            </p>

                            <p className="mt-3 text-lg font-medium">
                                Identical S33 cardstock, Gloss, details, simply, high-quality <b> MTG proxy cards </b>!
                            </p>
                        </div>
                        <button className=" mt-8 py-2 px-3 text-white pBg rounded-3xl flex gap-3 items-center cursor-pointer">
                            <span>Order Now</span>
                            <div className="py-1 px-1 bg-white rounded-full">
                                <BiRightArrowAlt className="text-black text-xl" />
                            </div>
                        </button>
                    </div>
                    <div>
                        <Image src={get} alt="checkoutImage" height={`500`} width={`500`} />
                    </div>
                </div>
            </Container>
        </div>
    )
}
