import React from "react";
import { spliceOverview, spliceTitle } from "../../util/Utils";

const CustomCard = ({ movie }) => {
  const { poster_path, release_date, original_title, overview, vote_average } =
    movie;
  return (
    <>
      <div className="w-full flex flex-col justify-between items-left  bg-black text-[#F5F5F5] rounded-xl shadow-sm text-left  h-full">
        <div className="w-full flex justify-center items-center  ">
          <img
            src={` https://image.tmdb.org/t/p/original${poster_path}`}
            alt="No Image"
            className="w-full h-full rounded-t-xl"
          />
        </div>
        <div className="px-2">
          <div className="w-full font-bold text-2xl  ">
            <span className="text-left">{spliceTitle(original_title)}</span>
          </div>
          <div className="w-full font-semibold text-lg text-white">
            <span className="font-bold ">Release Date: </span>
            <span>{release_date}</span>
          </div>
          <div className="w-full font-semibold text-lg text-white">
            <span className="font-bold ">Rating: </span>
            <span>{vote_average}</span>
          </div>
          <div className="w-full  text-lg text-white">

            <span>{spliceOverview(overview)}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomCard;
