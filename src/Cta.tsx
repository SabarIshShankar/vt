import React from "react";

import {
    HeartOutlined,
} from "@ant-design/icons";

import "swiper/css";
import "swiper/css/pagination";
import Reviews from './Reviews'
import "./styles.css";

const Cta = () => {
    return (
        <div className="">
            <div className="flex fixed1 bg-white shadow-md pt-3 mx-auto px-2 lg:px-8 md:hidden">
                <button
                    className="mx-2 w-full pr-2 text-sm flex h-12 items-center border border-gray-200 justify-center rounded-lg bg-yellow-600 text-white outline-none focus:outline-none"
                >
                    <span className="px-2">SAVE DISCOUNT FOR LATER</span>
                    <HeartOutlined />
                </button>
            </div>

            <div className="flex fixed1 bg-white shadow-md pt-3 mx-auto px-2 lg:px-10  max-w-7xl md:block hidden md:flex justify-center">
                <h1 className="text-lg w-full">20% OFF on Hibernate</h1>
                <button
                    className="mx-2 w-full pr-2 text-sm flex h-12 items-center border border-gray-200 justify-center rounded-lg bg-yellow-600 text-white outline-none focus:outline-none"
                >
                    <span className="px-2">SAVE DISCOUNT FOR LATER</span>
                    <HeartOutlined />
                </button>
            </div>
        </div>
    );
};

export default Cta;
