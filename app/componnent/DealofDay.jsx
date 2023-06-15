"use client"


// import Swiper core and required modules
import { A11y, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";

import SingleDay from "./SingleDay";

import crousal1 from "../../public/cr1.png";
import crousal2 from "../../public/cr2.png";
import crousal3 from "../../public/cr3.png";
import crousal4 from "../../public/cr4.png";
import crousal5 from "../../public/cr5.png";
import crousal6 from "../../public/cr6.png";



export default function DealofDay() {



    return (
        <div className="rounded-lg bg-gray-300 col-span-5 py-2 px-2">
            <div className="py-1 px-1">
                <Swiper
                    // install Swiper modules
                    modules={[A11y, Navigation]}
                    spaceBetween={10}
                    slidesPerView={5}
                    navigation
                    loop={true}
                    clickable={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    speed={1000}
                >
                    <SwiperSlide>
                        <SingleDay img={crousal1} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SingleDay img={crousal2} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SingleDay img={crousal3} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SingleDay img={crousal4} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SingleDay img={crousal5} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SingleDay img={crousal6} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SingleDay img={crousal2} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SingleDay img={crousal4} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    )
}
