import React, { useState } from "react";
import {
    HeartOutlined,
    ShareAltOutlined, LeftOutlined
} from "@ant-design/icons";
import { RWebShare } from "react-web-share";
import { BottomSheet, Button } from "@cred/neopop-web/lib/components";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

const Header = () => {
    const [isOpen, setOpen] = useState();
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <div className="header border-b border-gray-200 bg-white mx-auto py-5 px-5 sm:py-3 sm:px-3 lg:px-10 font">
                <div className="flex justify-between autolayout">

                        <div className="text-2xl ">glimpse</div>
                   
                    <div className="flex text-2xl">
                        <div className="px-3 hover:bg-gray-50 rounded-lg
                        transition ease-in-out delay-150
                        hover:-translate-y-0.5" onClick={() => setOpen(true)}>
                            <HeartOutlined />
                        </div>
                        <div className="pl-3 rounded-lg
                        transition ease-in-out delay-150
                        hover:-translate-y-0.5">
                            <RWebShare
                                data={{
                                    text: "Share this Guest Experience",
                                    url: "http://vip.tryglimpse.com/3189",
                                    title: "GfG",
                                }}
                                onClick={() => console.log("shared successfully!")}
                            >
                                <button>
                                    <ShareAltOutlined />
                                </button>
                            </RWebShare>
                        </div>
                    </div>
                </div>
                {/**/}
            </div>

            <BottomSheet open={isOpen} handleClose={handleClose}>
                <div className="p-5">
                    <p className="py-1 text-gray-500">
                        Where should we send the discount code to.
                    </p>
                    <input
                        placeholder="example@email.com"
                        type="email"
                        className=" w-full px-2 border border-gray-200 p-1 mt-3 h-12 rounded-lg focus:outline-none text-md"
                    />
                    <button className="button w-full mt-3 mb-5 text-sm flex h-12 items-center justify-center rounded-md bg-yellow-600 text-white outline-none focus:outline-none">
                        GET DISCOUNT
                    </button>

                    <div className="flex">
                        <input
                            placeholder="example@email.com"
                            type="email"
                            className=" w-full px-2 border border-gray-200 p-1 mt-3 h-12 rounded-md focus:outline-none text-md"
                        />
                        <button className="button w-16 ml-1 mt-3 mb-5 text-sm flex h-12 items-center justify-center rounded-md bg-yellow-600 text-white outline-none focus:outline-none">
                            GET
                        </button>
                    </div>
                </div>
            </BottomSheet>

        </div>
    );
};

export default Header;
