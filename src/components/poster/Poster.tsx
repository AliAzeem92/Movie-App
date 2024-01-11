import React from "react";
import SinglePoster from "./singlePoster/SinglePoster";

export function Poster() {
  return (
    <div>
      <p className="ml-[80px] ">Popular Movies</p>
      <div className="flex">
        <div className="mr-[22px] ml-[80px] ">
          <SinglePoster />
        </div>
        <div>
          <SinglePoster />
        </div>
      </div>
    </div>
  );
}

export default Poster;
