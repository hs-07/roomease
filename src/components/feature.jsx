import React from "react";

import { FEATURES_CONSTANT } from "../utils/constants";

const feature = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 py-20">
      <span className="text-gray-500 pb-20">
        Join this stream of 116+ happy customers!
      </span>

      <div className="flex flex-col items-center gap-2 w-full md:px-16">
        <span className=" text-3xl md:text-5xl font-semibold text-text_primary">
          Features
        </span>
        <p className="md:text-lg text-center">
          Discover a seamless way to connect with compatible roommates
        </p>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-6 mt-20">
          {FEATURES_CONSTANT.map((item, index) => (
            <div
              className="flex w-full items-center flex-col justify-center gap-6 bg-[#E4FAFF] py-6 h-[350px] rounded-2xl hover:bg-white transition-all ease-in-out"
              key={index}
            >
              <img src={item.src} alt="" className="" />
              <span className="text-text_primary font-semibold text-xl md:text-3xl text-center">
                {item.heading}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default feature;
