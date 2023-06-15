import { AiFillStar } from "react-icons/ai";

export default function Review() {
    return (
        <div className="bg-gray-300 rounded-lg h-full py-2 col-span-3">
            <div className="py-2 px-2 flex">
                <div className="w-full py-1 px-1">
                    <div className="w-4/4 flex justify-between items-center pb-4 borderBOtom">
                        <div>
                            <h1 className="text-2xl text-gray-900 font-bold">
                                Excellent
                            </h1>
                        </div>
                        <div className="flex gap-1">
                            <AiFillStar className="text-2xl h-8 w-8 rBg rounded-sm font-semibold text-gray-100" />
                            <AiFillStar className="text-2xl h-8 w-8 rBg rounded-sm font-semibold text-gray-100" />
                            <AiFillStar className="text-2xl h-8 w-8 rBg rounded-sm font-semibold text-gray-100" />
                            <AiFillStar className="text-2xl h-8 w-8 rBg rounded-sm font-semibold text-gray-100" />
                            <AiFillStar className="text-2xl h-8 w-8 rBg rounded-sm font-semibold text-gray-100" />
                        </div>
                        <span className="text-gray-900 text-xl font-semibold">(4.8 out of 5)</span>

                    </div>
                    <div className="w-full pt-9 flex justify-between">
                        <div className="flex gap-2 items-center font-semibold">
                            <b className="text-gray-950 text-2xl">66+</b>
                            <span className="text-gray-900 text-xl">Reviews</span>
                        </div>
                        <div className="text-xl font-semibold text-gray-900 cursor-pointer pt-2">
                            Click here Check Review
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
