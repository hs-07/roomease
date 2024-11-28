import React from "react";
import { MATCH_ROOMATE } from "../utils/constants";

const match = () => {
  return (
    <div className="px-4 md:px-20 flex flex-col justify-center items-center py-20 bg-[#F9F9F9]">
      <span className="text-3xl text-center md:text-5xl font-semibold text-text_primary pb-4">
        How to Match with Your Ideal Roommate?
      </span>
      <p className="md:text-lg text-center">
        Easily find your perfect roommate
      </p>
      <div className="flex gap-10 pt-16 items-center flex-col md:flex-row">
        <div className="w-full md:w-2/5 flex flex-col gap-6 ">
          {MATCH_ROOMATE.map((item, index) => (
            <div className="" key={index}>
              <span className="text-primary font-semibold text-xl md:text-3xl pb-4">
                {item.title}
              </span>
              <p className="md:text-lg">{item.para}</p>
            </div>
          ))}
        </div>

        <div className="w-full md:w-3/5">
          <img src="/hero-2.svg" alt="hero-2" className="" />
        </div>
      </div>
    </div>
  );
};

export default match;
