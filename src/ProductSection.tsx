import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import {StarFilled} from '@ant-design/icons'

import { Pagination } from "swiper";

const ProductSection = () => {
    return (
        <div>
            <div className="md:flex items-start justify-center py-5 2xl:px-10 md:px-6 px-4">
                <div className="xl:w-1/2 lg:w-2/5 w-fit md:block hidden">
                    <Swiper
                        pagination={true}
                        modules={[Pagination]}
                        className="mySwiper"
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                    >
                        <SwiperSlide>
                            <img
                                loading="lazy"
                                alt="product"
                                className="h-96 w-full object-cover rounded-xl"
                                src="https://glimpse-brands-images.s3.us-east-2.amazonaws.com/322c6741-53fe-4b25-8db2-94a366094c7e.webp"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                loading="lazy"
                                alt="product"
                                className="h-96 w-full object-cover rounded-xl"
                                src="https://glimpse-brands-images.s3.us-east-2.amazonaws.com/6e6eb4ff-bc3e-4cbf-8f91-eb9372778b84.webp"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                loading="lazy"
                                alt="product"
                                className="h-96 w-full object-cover rounded-xl"
                                src="https://glimpse-brands-images.s3.us-east-2.amazonaws.com/ae25237b-c0e6-4256-b731-a77678783fc3.webp"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="md:hidden -m-4">
                    <Swiper
                        pagination={true}
                        modules={[Pagination]}
                        className="mySwiper"
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                    >
                        <SwiperSlide>
                            <img
                                loading="lazy"
                                alt="product"
                                className="h-64 w-full object-cover"
                                src="https://glimpse-brands-images.s3.us-east-2.amazonaws.com/322c6741-53fe-4b25-8db2-94a366094c7e.webp"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                loading="lazy"
                                alt="product"
                                className="h-64 w-full object-cover"
                                src="https://glimpse-brands-images.s3.us-east-2.amazonaws.com/6e6eb4ff-bc3e-4cbf-8f91-eb9372778b84.webp"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                loading="lazy"
                                alt="product"
                                className="h-64 w-full object-cover"
                                src="https://glimpse-brands-images.s3.us-east-2.amazonaws.com/ae25237b-c0e6-4256-b731-a77678783fc3.webp"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="xl:w-3/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                    <div className="pb-1">
                        <h1
                            className="
							lg:text-xl
							text-md"
                        >
                            Hibernate Sheet Sets
                        </h1>
                        <div className="lg:text-2xl	text-xl flex">
                            <span className="lg:text-2xl   rounded-xl text-xl">
                                $55.96
                            </span>
                            <span className="lg:text-2xl rounded-xl text-xl	text-gray-500 px-3 line-through">
                                $69.95
                            </span>
                            <span className="lg:text-sm autolayout text-sm bg-green-600 rounded-full px-3 py-0.5 text-white">
                                5.0 <StarFilled/>
                            </span>
                        </div>
                    </div>

                    <div>
                        <button className="autolayout w-full flex justify-between p-2 my-4 content-center rounded-lg text-black flex border border-neutral-300">
                            <span className="bg-yellow-600 text-white rounded-3xl text-xs px-3 py-2">
                                Get 20% OFF
                            </span>
                            <span>
                                <span className="px-1">Click to view discount code</span>
                            </span>
                        </button>
                    </div>
                    <div className="text-xl w-full">
                        <div className="text-lg my-4 flex">
                            <button className="w-full autolayout justify-between h-12 p-0.5 transition-colors duration-150 bg-yellow-g rounded-l-lg focus:shadow-outline">
                                <span className="p-3">GLIMPSE</span>
                            </button>
                            <button className="bg-gray-900 p-2 text-white rounded-r-lg px-3">
                                Copy
                            </button>
                        </div>
                    </div>
                    <button
                        className="
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-gray-800
						w-full
						py-4
						hover:bg-black rounded-lg
                        transition ease-in-out delay-150
                        hover:-translate-y-0.5
					"
                    >
                        Buy now in shop
                    </button>
                    <div>
                        <div className="py-4 border-gray-200 items-center justify-between">
                            <p className="text-gray-800">Description</p>
                        
                        <p className="text-gray-600">
                            We think these sheets are pretty great. With comfort in mind, we
                            developed a signature brushed fabric that's amazingly soft,
                            breathes well and resists wrinkles.
                        </p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSection;
