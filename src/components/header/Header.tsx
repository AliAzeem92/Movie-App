// MovieTracker.tsx

import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex w-screen">
      {/* Heading */}
      <div className="flex-shrink-0 p-4 mx-12 text-white">
        <h1 className="text-[35px] font-bold text-black font-caros-bold">
          The
          <br /> Movie
          <br /> Tracker
        </h1>
      </div>

      {/* Search Bar */}
      <div className="flex-grow p-4">
        <input
          type="text"
          placeholder="🔍 Search a movie or a series"
          className="w-[630px] h-[57px] p-2 mt-8 mx-[245px] border border-gray-300 rounded-3xl bg-[#D9D9D9] text-center text-black-800 focus:outline-none focus:border-blue-500 transition-all duration-300 ease-out"
        />
      </div>
    </div>
  );
};

export default Header;
