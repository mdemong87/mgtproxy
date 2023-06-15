"use client"

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import Container from "./Container";

import { useSwiper } from "swiper/react";
// import Swiper core and required modules
import { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import SinglePopular from "./SinglePopular";

import p1 from "../../public/p1.webp";
import p2 from "../../public/p2.webp";
import p3 from "../../public/p3.webp";
import p4 from "../../public/p4.webp";
import p5 from "../../public/p5.webp";
import p6 from "../../public/p6.webp";
import p7 from "../../public/p7.webp";
import p8 from "../../public/p8.webp";







export default function Popolur() {

    const swiperChanger = useSwiper();


    const handleNext = () => {
        swiperChanger.slideNext();
    }

    const handlePrev = () => {
        swiperChanger.slidePrev();
    }



    return (
        <div className="bg-gray-200 py-6">
            <Container>
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-bold">Most Popular Cards</h1>
                    <div className="flex gap-5 items-center w-26">
                        <div onClick={() => handlePrev()} className="py-2 px-2 pBg rounded-md cursor-pointer">
                            <AiFillCaretLeft className="text-3xl text-white" />
                        </div>
                        <div onClick={() => handleNext()} className="pBg py-2 px-2 rounded-md cursor-pointer">
                            <AiFillCaretRight className="text-3xl text-white" />
                        </div>
                    </div>
                </div>
                <div className="py-4">
                    <Swiper
                        // install Swiper modules
                        modules={[A11y]}
                        spaceBetween={20}
                        slidesPerView={4}
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
                            <SinglePopular title="Urza's Saga" img={p1} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <SinglePopular title="Rhystic Study" img={p2} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <SinglePopular title="Polluted Delta" img={p3} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <SinglePopular title="Mana Crypt" img={p4} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <SinglePopular title="Cycclonic Rift" img={p5} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <SinglePopular title="Smothring Tithe" img={p6} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <SinglePopular title="Gaea's Cradle" img={p7} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <SinglePopular title="Jeweled Lotus" img={p8} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Container >
        </div >
    )
}
