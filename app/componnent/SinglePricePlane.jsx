import { TbCards } from "react-icons/tb";


export default function SinglePricePlane({ img, quenty, price, dis }) {
    return (
        <div className={`w-full singleHeight mb-5 shadow-md bg-gray-300 rounded-xl ${quenty == "50 + Cards" ? "pBg" : null}`}>
            <div className={`toprediusDesign flex pt-5 pl-5 ${quenty == "50 + Cards" ? "sBg2" : "pBg"}`}>
                <TbCards className={`text-gray-200 w-16 h-16 ${quenty == "50 + Cards" ? "text-gray-700" : "pBg"}`} />
            </div>
            <div className={`py-2 px-4 pBg w-2/4 mx-auto mt-2 rounded-full ${quenty === "50 + Cards" ? "sBg" : null}`}>
                <h2 className={`text-gray-100 text-center font-semibold text-xl ${quenty === "50 + Cards" ? "text-gray-900" : null} `}>{quenty}</h2>
            </div>
            <div className="flex flex-col items-center">
                <h1 className={`text-gray-900 text-5xl font-bold pt-6 w-fit  ${quenty === "50 + Cards" ? "sColor" : null}`}>${price}</h1>
                <p className={`text-gray-800 text-center py-8 px-14 ${quenty === "50 + Cards" ? "sColor" : null}`}>
                    {dis}
                </p>
            </div>
        </div >
    )
}
