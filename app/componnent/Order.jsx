import { AiOutlineCloudUpload } from "react-icons/ai";
import { BiImport } from "react-icons/bi";
import { MdOutlineGroups2 } from "react-icons/md";
import Container from "./Container";

export default function Order() {
    return (
        <div className="bg-gray-950">
            <Container>
                <div className="bg-gray-200 pt-5 px-5">
                    <div className="text-center w-2/4 mx-auto">
                        <h1 className="pColor text-3xl font-semibold">START YOUR MTG PROXY ORDER BELOW</h1>
                        <p className="py-4 text-lg font-semibold text-gray-500">Check our <b className="pColor">guide</b> on how to place your order.
                            Make sure that the visual you pick is sharp; <span className="pColor">you get what you see.</span></p>
                    </div>
                    <div className="flex items-center justify-between gap-3 border-sky-500 border-2 rounded-lg p-6 bg-gray-400">
                        <div className="w-full">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-3 items-center">
                                    <h3 className="text-xl font-semibold">Card Name:</h3>
                                    <input className="p-2 text-black sBg rounded-md placeholder:p-2" type="text" placeholder="Docks..." />
                                </div>
                                <h1 className="font-semibold">OR</h1>
                                <button className='py-2 px-2 rounded-md flex gap-2 items-center cursor-pointer pBg'>
                                    <BiImport className='text-2xl text-gray-200' />
                                    <span className="text-gray-200">Import Deck</span>
                                </button>
                            </div>

                            <div className="py-5">
                                <h3 className="text-xl text-center font-semibold text-gray-800">Or add any number of cards by entering their names</h3>
                                <div className=" mt-2 p-2 rounded-md bg-gray-300">
                                    <textarea placeholder="1.Dockside extortionist  2.Mana Drain  3.Bayou" className="bg-transparent w-full h-24 text-gray-900 placeholder:text-gray-800 focus:outline-none">
                                    </textarea>
                                </div>
                            </div>

                            <div className="gap-3 flex justify-between px-1">
                                <select className="py-2 px-2 rounded-md cursor-pointer sBg text-black focus:outline-none">
                                    <option value="gdfgsd">English</option>
                                    <option value="gdfgsd">sgdfgsd</option>
                                    <option value="gdfgsd">sgdfgsd</option>
                                    <option value="gdfgsd">sgdfgsd</option>
                                    <option value="gdfgsd">sgdfgsd</option>
                                </select>

                                <select className="py-2 px-2 rounded-md cursor-pointer sBg text-black focus:outline-none">
                                    <option value="gdfgsd">Grand Prix</option>
                                    <option value="gdfgsd">sgdfgsd</option>
                                    <option value="gdfgsd">sgdfgsd</option>
                                    <option value="gdfgsd">sgdfgsd</option>
                                    <option value="gdfgsd">sgdfgsd</option>
                                </select>

                                <select className="py-2 px-2 rounded-md cursor-pointer sBg text-black focus:outline-none">
                                    <option value="gdfgsd">Default Group</option>
                                    <option value="gdfgsd">sgdfgsd</option>
                                    <option value="gdfgsd">sgdfgsd</option>
                                    <option value="gdfgsd">sgdfgsd</option>
                                    <option value="gdfgsd">sgdfgsd</option>
                                </select>

                                <button className='py-2 px-2 rounded-md cursor-pointer pBg'>
                                    <span className="text-gray-200">Add Card</span>
                                </button>
                            </div>
                        </div>
                        <div className="px-4 text-5xl text-gray-950">OR</div>
                        <div className="w-full">
                            <h3 className="text-xl text-center font-semibold text-gray-900">Upload your own card</h3>
                            <div className=" mt-2 p-2 rounded-md bg-gray-300">
                                <h3 className="text-lg font-medium text-gray-800">For best results, follow these recommendations :</h3>
                                <ul className="list-disc pl-6 pt-2 text-gray-600">
                                    <li>Recommended resolution of 300 DPI +</li>
                                    <li>Card size : 63mm by 88mm (2.5" by 3.5")</li>
                                    <li>Image type : JPG or PNG only</li>
                                </ul>
                            </div>
                            <div className="py-2">
                                <h3 className="text-lg font-semibold text-gray-800">Want to create your <span className="text-gray-200">Own Card </span>?</h3>
                                <h3 className="text-lg font-semibold text-gray-800">Check our <span className="text-gray-200">Custom Gallery</span></h3>
                            </div>
                            <div className="flex justify-between items-center">

                                <button className='py-2 px-2 rounded-md flex gap-2 items-center cursor-pointer sBg'>
                                    <MdOutlineGroups2 className='text-2xl text-black' />
                                    <span className="text-black">Default Group</span>
                                </button>


                                <button className='py-2 px-2 rounded-md flex gap-2 items-center cursor-pointer pBg'>
                                    <AiOutlineCloudUpload className='text-2xl text-gray-200' />
                                    <span className="text-gray-200">Upload Card</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
