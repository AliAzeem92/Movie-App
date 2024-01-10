// MovieTracker.tsx

import React from "react";

const MovieTracker: React.FC = () => {
  return (
    <div className="flex w-screen h-screen bg-gray-200">
      {/* Heading */}
      <div className="flex-shrink-0 w-1/5 p-4 mx-12 text-white">
        <h1 className="text-3xl font-bold text-black font-caros-bold">
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
          className="w-1/2 p-2 mt-8 border border-gray-300 rounded-3xl bg-gray-300 text-center text-black-800 focus:outline-none focus:border-blue-500 transition-all duration-300 ease-out"
        />
      </div>
    </div>
  );
};

export default MovieTracker;
