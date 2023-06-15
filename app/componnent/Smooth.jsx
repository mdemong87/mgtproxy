import Image from "next/image";
import smooth from '../../public/smooth.webp';
import Container from "./Container";

export default function Smooth() {
    return (
        <div className="bg-gray-950">
            <Container>
                <div className="grid grid-cols-4 py-5 bg-gray-200">
                    <div className="flex justify-center">
                        <Image className="w-3/4" src={smooth} alt="smooth-image" width="400" height="400" />
                    </div>
                    <div className="col-span-3 mt-4">
                        <b className="text-xl font-semibold">
                            S33 superior smooth card stock with black core (smooth finish)
                        </b>
                        <p className="pt-5 pr-12 text-gray-600 text-lg">
                            Our S33 card stock has an extra smooth finish and is a card stock which is considered to be one of the finest available: <b> A 1 to 1 matching cardstock to MTG/PKM cards</b>. This card stock provides more visual contrast than standard stock, keeping the graphics printed on each card vivid in colors. The card stock is made to look cleaner, extra durable, and all in all, possesses a superior feel to them. Most importantly, we’re the only one offering item on demand, in the US.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
