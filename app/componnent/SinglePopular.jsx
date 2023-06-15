import Image from "next/image";
import { BiRightArrowAlt } from "react-icons/bi";

export default function SinglePopular({ img, title }) {
    return (
        <div className="w-full rounded-lg">
            <div className="h-2/4">
                <Image src={img} alt="popilar-card-imgage" className=" rounded-t-lg h-full object-cover" width={`500`} height={`500`} />
            </div>
            <div className="bg-white rounded-b-lg py-5 px-5">
                <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
                <span className="text-lg">as low as $ 0.75</span>
                <button className=" mt-8 py-2 px-3 text-white pBg rounded-3xl flex gap-3 items-center cursor-pointer">
                    <span>Add to Cart</span>
                    <div className="py-1 px-1 bg-white rounded-full">
                        <BiRightArrowAlt className="text-black text-xl" />
                    </div>
                </button>
            </div>
        </div>
    )
}
