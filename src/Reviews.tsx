import React from "react";
import "./styles.css";
import "antd/dist/antd.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { StarFilled } from "@ant-design/icons";

export default function Reviews() {
  const responsive = {
    Mx: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    Lg: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.5
    },
    Md: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    Sm: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    },
    VrSm: {
      breakpoint: { max: 280, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <div className="App h-48 mx-auto py-3 px-4 sm:py-3 sm:px-3 lg:px-10 font">
        <div className="border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800">Reviews</p>
        </div>
        <Carousel
          responsive={responsive}
          minimumTouchDrag={50}
          arrows={false}
          autoPlay={true}
          infinite
        >
          <div className="tracking-tight m-1">
            <div className="w-full mr-2">
              <div className="border border-gray-200 bg-white rounded-lg shadow-md">
                <div className="mt-2 h-48">
                  <h1 className="mb-1 px-2 text-sm">Username</h1>

                  <p className="mb-1 px-2 text-lg font-medium pr-2 flex text-yellow-600">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                  </p>
                  <div className="text-md px-2 text-gray-500 py-2">
                    I absolutely love this blanket! At first, I was a little
                    skeptical because I didn’t want to spend a lot of money on a
                    blanket, and I wasn’t sure if the bamboo would really keep
                    me cool at night, but I’m glad I purchased!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tracking-tight m-1">
            <div className="w-full mr-2 h-48">
              <div className="border border-gray-200 bg-white rounded-lg shadow-md">
                <div className="mt-2 h-48">
                  <h1 className="mb-1 px-2 text-sm">Username</h1>

                  <p className="mb-1 px-2 text-lg font-medium pr-2 flex text-yellow-600">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                  </p>
                  <div className="text-md px-2 text-gray-500 blue-navy py-2">
                    I absolutely love this blanket! At first, I was a little
                    skeptical because I didn’t want to spend a lot of money on a

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tracking-tight m-1 h-96">
            <div className="w-full mr-2 h-48">
              <div className="border border-gray-200 bg-white rounded-lg shadow-md">
                <div className="mt-2 h-48">
                  <h1 className="mb-1 px-2 text-sm">Username</h1>

                  <p className="mb-1 px-2 text-lg font-medium pr-2 flex text-yellow-600">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                  </p>
                  <div className="text-md px-2 text-gray-500 blue-navy py-2">
                    I absolutely love this blanket! At first, I was a little
                    skeptical because I didn’t want to spend a lot of money on a
                    blanket, and I wasn’t sure if the bamboo would really keep

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tracking-tight m-1">
            <div className="w-full mr-2 h-48">
              <div className="border border-gray-200 bg-white rounded-lg shadow-md">
                <div className="mt-2 h-48">
                  <h1 className="mb-1 px-2 text-sm">Username</h1>

                  <p className="mb-1 px-2 text-lg font-medium pr-2 flex text-yellow-600">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                  </p>
                  <div className="text-md px-2 text-gray-500 blue-navy py-2">
                    I absolutely love this blanket! At first, I was a little
                    skeptical because I didn’t want to spend a lot of money on a
                    blanket, and
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}