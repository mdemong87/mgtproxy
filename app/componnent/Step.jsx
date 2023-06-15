import Image from "next/image";
import stapBanner from "../../public/step.jpg";
import Container from "./Container";

export default function Step() {
    return (
        <div className="bg-gray-200">
            <Container>
                <div>
                    <h1 className="text-center text-black text-3xl font-bold py-8">HOW TO BUY MTG PROXY</h1>
                </div>
                <div className="pt-4 pb-7">
                    <Image className="w-full pt-1" src={stapBanner} height={`1000`} width={`1000`} />
                </div>
            </Container >
        </div >
    )
}
