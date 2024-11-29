import React from "react";

const navbar = () => {
  return (
    <div className="flex w-full justify-between px-4 md:px-20 py-4 sticky bg-white shadow-md top-0">
      <div className="flex gap-2 items-center">
        <img src="/logo.jpg" alt="logo" className="w-10 h-10" />
        <span className="text-primary font-semibold md:text-xl">Roomease</span>
      </div>
      <a
        className="bg-primary px-4 py-2 rounded-lg text-white md:text-base text-sm transition-all ease-in-out hover:scale-105 focus:scale-95"
        href="https://forms.gle/hKiiCSdra1wzLpCi8"
        target="_blank"
        rel="noreferrer"
      >
        Join the Waitlist
      </a>
    </div>
  );
};

export default navbar;
