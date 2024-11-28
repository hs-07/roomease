import React from "react";

const hero = () => {
  return (
    <div className="flex md:flex-row flex-col bg-primary px-4 md:px-20 h-full items-center md:gap-8 gap-4">
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center gap-6 py-8">
        <span className="text-white font-semibold md:text-6xl text-4xl">
          Find your Perfect Roommate with ease
        </span>
        <p className="text-white md:text-lg">
          Roomease matches you with compatible roommates based on your
          preferences and lifestyle. Swipe to find your perfect match!
        </p>
        <button className="bg-secondary px-5 py-3 rounded-lg text-white w-fit">
          Join the Waitlist
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <img src="/hero.svg" alt="hero" className="" />
      </div>
    </div>
  );
};

export default hero;
