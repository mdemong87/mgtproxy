import card1 from "../../public/card1.webp";
import card2 from "../../public/card2.webp";
import card3 from "../../public/card3.webp";
import card4 from "../../public/card4.webp";
import Container from "./Container";
import SinglePricePlane from "./SinglePricePlane";

export default function PriceingPlane() {
    return (
        <div className="bg-gray-950">
            <Container>
                <div className="bg-gray-200 px-5">
                    <h1 className="text-center pColor text-3xl font-bold pb-5">MTG PROXY PRICING</h1>
                    <div className="flex justify-between items-center gap-5 py-1">

                        <SinglePricePlane img={card1} quenty={"Single"} price="2" dis="For that ONE card you’ve been wantingto play!" />

                        <SinglePricePlane img={card2} quenty={"15 + Cards"} price="1.5" dis="It’s time to get some mtg proxy upgrades for your deck !" />

                        <SinglePricePlane img={card3} quenty={"50 + Cards"} price="1" dis="Why not get an entire MTG proxy deck ?Play test and have fun!" />

                        <SinglePricePlane img={card4} quenty={"200 + Cards"} price="0.75" dis="Let’s get en MTG proxy cube cost, time to have fun!" />




                    </div>
                </div>
            </Container >
        </div >
    )
}
