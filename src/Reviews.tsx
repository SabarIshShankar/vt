import "./styles.css";
import "antd/dist/antd.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { StarFilled, InstagramOutlined, FacebookOutlined, GlobalOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";

export default function Reviews() {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const Emoji = (props) => (
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  );

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
      items: 1.2
    },
    VrSm: {
      breakpoint: { max: 280, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <div className="App h-48 mx-auto py-3 px-4 sm:py-3 sm:px-3 lg:px-10 font mb-24">
        <div className="border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800">Reviews</p>
        </div>
        <Carousel
          responsive={responsive}
          minimumTouchDrag={50}
          arrows={false}
          autoPlay={false}
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

        <div>
          <div className="container my-12 mx-auto px-2 md:px-2 pb-24">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">

              <div className="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">

                <div className="overflow-hidden rounded-lg shadow-lg">

                  <div className="border border-gray-200 overflow-hidden rounded-lg mx-auto shadow-lg font">



                    <img className="object-cover w-full h-36" src="https://media-exp1.licdn.com/dms/image/C561BAQHwlKS8yZAPrw/company-background_10000/0/1587846535448?e=2147483647&v=beta&t=Kleaoso4-IRW47zOMu_r4XDPpVKyAavf3ce7Rmz7FkU" alt="head" />
                    <div className="flex ml-3 -mt-8">
                      <img className="rounded-full border-solid border-white border-2 -mt-3 h-16" src="https://pbs.twimg.com/profile_images/1270398175178874880/OgLcWk8w_400x400.jpg" />
                    </div>
                    <div className="text-left px-3 pb-6 pt-4">
                      <h1 className="text-xl">Bearaby</h1>
                      <h1 className="text-sm">The natural way to sleep well. Soft, breathable, chunky knit that looks as good as it feels</h1>
                    </div>
                    <div className="text-center px-3 py-2 border-t">
                      <h1 className="text-md">Visit</h1>
                    </div>
                  </div>

                </div>

              </div>

              <div className="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">

                <div className="overflow-hidden rounded-lg shadow-lg">

                  <div className="border-2 border-orange-600 rounded-lg p-5 mx-auto shadow-lg font">
                    <h1 className="text-lg">Have you tried this product during your stay?</h1>
                    <Radio.Group onChange={onChange} value={value}>
                      <Radio value={1}>Yes</Radio>
                      <Radio value={2}>No</Radio>
                    </Radio.Group>

                    <h1 className="text-lg pt-4">How do you like the product?</h1>
                    <Radio.Group defaultValue="a" buttonStyle="solid">
                      <Radio value={1}>Yes</Radio>
                      <Radio value={2}>No</Radio>
                    </Radio.Group>
                    <button className="w-full bg-gray-50 border border-gray-300 mt-3 p-3 rounded-lg">Submit</button>
                  </div>
                </div>
              </div>

              
            </div>
            <div className="px-4 mt-4 sm:w-1/3 pt-4 sm:mx-auto xl:mt-0 xl:ml-auto">
              <h5 className="text-xl mb-3 text-center">Powered by glimpse</h5>
              <div className="flex justify-center">
                <div className="w-8 h-8 text-xl border-gray-400 rounded-full text-center text-gray-600">
                  <InstagramOutlined />
                </div>
                <div className="w-8 h-8 text-xl border-gray-400 rounded-full text-center ml-2 text-gray-600">
                  <FacebookOutlined />
                </div>
                <div className="w-8 h-8 text-xl border-gray-400 rounded-full text-center ml-2 text-gray-600">
                  <GlobalOutlined />
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}