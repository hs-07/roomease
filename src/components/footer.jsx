import React from "react";

import { LuInstagram, LuTwitter, LuLinkedin } from "react-icons/lu";

const footer = () => {
  return (
    <div className="px-4 md:px-20 pb-12 pt-20 ">
      <div className="flex w-full justify-between md:flex-row flex-col gap-6 items-center md:items-start">
        <div className="gap-4 flex flex-col items-center md:items-start">
          <div className="flex gap-2 items-center">
            <img src="/logo.jpg" alt="logo" className="w-10 h-10" />
            <span className="text-primary font-semibold md:text-xl">
              Roomease
            </span>
          </div>
          <p className="max-w-[550px] text-text_primary text-center md:text-start">
            Roomease matches you with compatible roommates based on your
            preferences and lifestyle. Swipe to find your perfect match!
          </p>
        </div>
        <div className="flex gap-6 font-semibold">
          <a href={"mailto:roomease.work@gmail.com"}>Contact Us</a>
          <a href={"/"}>Blogs</a>
        </div>
      </div>
      <div className="flex w-full justify-between pt-10 md:flex-row flex-col gap-6 items-center">
        <span className="">©2024 activitybeds. All rights reserved.</span>

        <div className="flex text-2xl gap-4">
          <a
            href="https://www.instagram.com/roomease.india/profilecard/?igsh=MWJ5MGFpZzhsdzIxMw=="
            target="_blank"
            rel="noreferrer"
            className=""
          >
            <LuInstagram className="hover:scale-105 transition-all ease-in-out active:scale-95" />
          </a>
          <a
            href="https://x.com/roomease_india/status/1859197311311569283?s=46"
            target="_blank"
            rel="noreferrer"
            className=""
          >
            <LuTwitter className="hover:scale-105 transition-all ease-in-out active:scale-95" />
          </a>
          <a
            href="https://www.linkedin.com/company/roomeaseindia/"
            target="_blank"
            rel="noreferrer"
            className=""
          >
            <LuLinkedin className="hover:scale-105 transition-all ease-in-out active:scale-95" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default footer;
