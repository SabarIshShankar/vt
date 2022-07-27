import React, { useState } from "react";
import { BottomSheet, Button } from "@cred/neopop-web/lib/components";

import {
    HeartOutlined,
} from "@ant-design/icons";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

const Cta = () => {
    const [isOpen, setOpen] = useState();
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="">
            <div className="flex fixed1 bg-white shadow-md pt-3 mx-auto px-2 lg:px-8 md:hidden">
                <button
                    className="mx-2 w-full pr-2 text-sm flex h-12 items-center border border-gray-200 justify-center rounded-lg bg-yellow-600 text-white outline-none focus:outline-none"
                    onClick={() => setOpen(true)}>
                    <span className="px-2">SAVE DISCOUNT FOR LATER</span>
                    <HeartOutlined />
                </button>
            </div>

            <div className="flex fixed1 bg-white shadow-md pt-3 mx-auto px-2 lg:px-10  max-w-7xl md:block hidden md:flex justify-center">
                <h1 className="text-lg w-full">20% OFF on Hibernate</h1>
                <button
                    className="mx-2 w-full pr-2 text-sm flex h-12 items-center border border-gray-200 justify-center rounded-lg bg-yellow-600 text-white outline-none focus:outline-none"
                    onClick={() => setOpen(true)}>
                    <span className="px-2">SAVE DISCOUNT FOR LATER</span>
                    <HeartOutlined />
                </button>
            </div>

            <BottomSheet open={isOpen} handleClose={handleClose}>
                <div className="p-5">
                    <p className="py-1 text-gray-500">
                        Where should we send the discount code to.
                    </p>
                    <input
                        placeholder="example@email.com"
                        type="email"
                        className=" w-full px-2 border border-gray-200 p-1 mt-3 h-12 rounded-md focus:outline-none text-md"
                    />
                    <button className="button w-full mt-3 mb-5 text-sm flex h-12 items-center justify-center rounded-2xl bg-yellow-600 text-white outline-none focus:outline-none">
                        GET DISCOUNT
                    </button>

                    <div className="flex">
                        <input
                            placeholder="example@email.com"
                            type="email"
                            className=" w-full px-2 border border-gray-200 p-1 mt-3 h-12 rounded-md focus:outline-none text-md"
                        />
                        <button className="button w-16 ml-1 mt-3 mb-5 text-sm flex h-12 items-center justify-center rounded-2xl bg-yellow-600 text-white outline-none focus:outline-none">
                            GET
                        </button>
                    </div>
                </div>
            </BottomSheet>
        </div>
    );
};

export default Cta;
