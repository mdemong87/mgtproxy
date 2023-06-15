import Image from "next/image";
import heroImage from "../../public/heroImage.webp";
import Container from "./Container";

export default function Hero() {
    return (
        <div className="bg-gray-950 h-full">
            <Container>
                <div className="grid grid-cols-2 gap-8 justify-between items-center bg-gray-200 py-5 px-5 rounded-t-lg">
                    <div>
                        <div>
                            <h1 className="pColor text-3xl font-semibold">ORDER ANY MTG PROXIES ON DEMAND</h1>
                            <p className="text-xl pt-2 font-medium">
                                We print <b className="font-bold">amazing quality MTG proxy. </b>
                                Similar cardstock, same size, even double sided <b className="font-bold">MTG proxies.</b>
                            </p>
                        </div>
                        <div className="mt-7">
                            <p className="text-xl font-medium">Insert your decklist bellow or upload your own card.
                                Orders are <b className="font-bold">READY</b> and shipped with in <b className="font-bold">1 working day</b>. We’re <b className="font-bold">FAST.</b>
                                Shipping is $5 US (2-5 days), or $20 international (8-15 days)
                                <b className="font-bold">With tracking numbers !</b></p>

                            <p className="pt-6 font-medium text-xl">
                                Join our MTG proxy <b className="pColor cursor-pointer">Discord</b> for 100s of uncensored reviews.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center px-12">
                        <Image src={heroImage} alt='HeroImage' height={`500`} width={`500`} />
                    </div>
                </div>
            </Container>
        </div>
    )
}
