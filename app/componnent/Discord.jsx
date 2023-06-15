"use client"


// import Swiper core and required modules
import Image from 'next/image';
import { A11y, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import profile from "../../public/cr4.png";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

import Container from "./Container";


export default function Discord() {
    return (
        <div className="bg-gray-950 pb-5">
            <Container>
                <div className="w-full pt-1 px-5 bg-gray-200 pb-5 rounded-b-lg">
                    <h1 className="text-3xl font-bold text-center pColor">CHECK OUT OUR UNCENSORRED REVIEWS</h1>
                    <div className="mt-3 bg-gray-400 rounded-lg py-5 px-5">
                        <Swiper
                            // install Swiper modules
                            modules={[A11y, Navigation, Pagination]}
                            slidesPerView={1}
                            navigation
                            pagination
                            loop={true}
                            clickable={true}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                            speed={1000}
                        >
                            <SwiperSlide>
                                <div className='w-3/4 mx-auto'>
                                    <div>
                                        <Image className='w-14 h-14 mx-auto rounded-full ring-2 ring-sky-500' src={profile} width="500" height="500" alt="profile" />
                                        <h1 className='text-center mt-2 text-2xl font-bold'>Hemlock</h1>
                                        <p className='text-center pt-3 font-medium text-lg pb-5'>My first order arrived just now, the quality is pretty good! Already loving the silly custom approaches and looking forward to trying out my edh decks.</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='w-3/4 mx-auto'>
                                    <div>
                                        <Image className='w-14 h-14 mx-auto rounded-full ring-2 ring-sky-500' src={profile} width="500" height="500" alt="profile" />
                                        <h1 className='text-center mt-2 text-2xl font-bold'>TheSaintChris</h1>
                                        <p className='text-center pt-3 font-medium text-lg pb-5'>Recently received my first order. Card stock quality and image clarity is very nice. I am a proxy and alter artist and I'll be using this service to print my work from now on.</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='w-3/4 mx-auto'>
                                    <div>
                                        <Image className='w-14 h-14 mx-auto rounded-full ring-2 ring-sky-500' src={profile} width="500" height="500" alt="profile" />
                                        <h1 className='text-center mt-2 text-2xl font-bold'>Md Emon Hossen</h1>
                                        <p className='text-center pb-5 pt-3 font-medium text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore adipisci nulla laboriosam et harum. Enim vel soluta aut! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, assumenda.</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='w-3/4 mx-auto'>
                                    <div>
                                        <Image className='w-14 h-14 mx-auto rounded-full ring-2 ring-sky-500' src={profile} width="500" height="500" alt="profile" />
                                        <h1 className='text-center mt-2 text-2xl font-bold'>Md Emon Hossen</h1>
                                        <p className='text-center pt-3 font-medium text-lg pb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore adipisci nulla laboriosam et harum. Enim vel soluta aut! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, assumenda.</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='w-3/4 mx-auto'>
                                    <div>
                                        <Image className='w-14 h-14 mx-auto rounded-full ring-2 ring-sky-500' src={profile} width="500" height="500" alt="profile" />
                                        <h1 className='text-center mt-2 text-2xl font-bold'>Md Emon Hossen</h1>
                                        <p className='text-center pb-5 pt-3 font-medium text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore adipisci nulla laboriosam et harum. Enim vel soluta aut! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, assumenda.</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='w-3/4 mx-auto'>
                                    <div>
                                        <Image className='w-14 h-14 mx-auto rounded-full ring-2 ring-sky-500' src={profile} width="500" height="500" alt="profile" />
                                        <h1 className='text-center mt-2 text-2xl font-bold'>Md Emon Hossen</h1>
                                        <p className='text-center pb-5 pt-3 font-medium text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore adipisci nulla laboriosam et harum. Enim vel soluta aut! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, assumenda.</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='w-3/4 mx-auto'>
                                    <div>
                                        <Image className='w-14 h-14 mx-auto rounded-full ring-2 ring-sky-500' src={profile} width="500" height="500" alt="profile" />
                                        <h1 className='text-center mt-2 text-2xl font-bold'>Md Emon Hossen</h1>
                                        <p className='text-center pb-5 pt-3 font-medium text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore adipisci nulla laboriosam et harum. Enim vel soluta aut! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, assumenda.</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='w-3/4 mx-auto'>
                                    <div>
                                        <Image className='w-14 h-14 mx-auto rounded-full ring-2 ring-sky-500' src={profile} width="500" height="500" alt="profile" />
                                        <h1 className='text-center pb-5 mt-2 text-2xl font-bold'>Md Emon Hossen</h1>
                                        <p className='text-center pt-3 font-medium text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore adipisci nulla laboriosam et harum. Enim vel soluta aut! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, assumenda.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            ...
                        </Swiper>
                    </div>
                </div>
            </Container >
        </div >
    )
}
