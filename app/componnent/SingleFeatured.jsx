import Image from "next/image";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaAppStore } from "react-icons/fa";


export default function SingleFeatured({ heading, img, dis }) {
    return (
        <div className="flex justify-between pBg rounded-lg px-5 py-3">
            <div className="w-full">
                <FaAppStore className="text-5xl text-gray-200" />
                <h1 className="text-xl font-bold shadow-sm pt-4">{heading}</h1>
                <p className="text-lg text-gray-200">{dis}</p>
                <button className=" mt-8 py-2 px-3 text-black bg-white rounded-3xl flex gap-3 items-center cursor-pointer">
                    <span>Discover More</span>
                    <div className="py-1 px-1 pBg rounded-full">
                        <BiRightArrowAlt className="text-white text-xl" />
                    </div>
                </button>
            </div>
            <div className="flex justify-end w-full items-center">

                <Image className={`h-36 object-fill w-3/4`} src={img} height={`300`} width={`300`} alt={"Featured-Image"} />

            </div>
        </div>
    )
}
