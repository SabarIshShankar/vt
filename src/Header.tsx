import React from "react";
import {
    HeartOutlined,
    ShareAltOutlined,
} from "@ant-design/icons";
import { RWebShare } from "react-web-share";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

const Header = () => {
    return (
        <div>
            <div className="header border-b border-gray-200 bg-white mx-auto py-5 px-5 sm:py-3 sm:px-3 lg:px-10 font">
                <div className="flex text-xl justify-between">
                    <h1 className="tracking-tight text-2xl">glimpse</h1>
                    <div className="flex text-2xl">
                        <div className="px-3">
                            <HeartOutlined />
                        </div>
                        <div className="pl-3">
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
        
        </div>
    );
};

export default Header;
