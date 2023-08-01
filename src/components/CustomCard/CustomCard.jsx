import React from "react";
import { Link } from "react-router-dom";
import { spliceOverview } from "../../util/Utils";

const CustomCard = ({ movie }) => {
  const { poster_path, release_date, original_title, overview, vote_average } =
    movie;
  return (
    <>
      <div className="w-full flex flex-col justify-between items-center  bg-white rounded-xl shadow-sm text-left  h-full">
        <div className="w-full flex justify-center items-center  ">
          <img
            src={` https://image.tmdb.org/t/p/original${poster_path}`}
            alt="No Image"
            className="w-full h-full rounded-t-xl"
          />
        </div>
        <div className="px-2">
          <div className="w-full font-bold text-xl text-black ">
            <span>{original_title}</span>
          </div>
          <div className="w-full font-semibold text-lg text-gray-700">
            <span>{release_date}</span>
          </div>
          <div className="w-full font-semibold text-lg text-gray-700">
            <span>Rating: </span>
            <span>{vote_average}</span>
          </div>
          <div className="w-full  text-lg text-gray-700">
            <span>{spliceOverview(overview)}....</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomCard;
