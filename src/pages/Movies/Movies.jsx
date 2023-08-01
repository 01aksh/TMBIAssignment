import React from "react";
import CustomCard from "../../components/CustomCard/CustomCard";
import { useState } from "react";
import { useEffect } from "react";
import APIServices from "../../service/MovieSearchService";
import logo from "../../assets/img/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg";
import Input from "../../components/Input/Input";
import CustomButton from "../../components/CustomButton/CustomButton";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchObj, setSearchObj] = useState("");
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    APIServices.getMoviesApi()
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.results);
        if (searchObj === "") {
          setMovies(response.results);
        }
        console.log(response.results);
      })
      .catch((err) => window.alert(err.message));
  }, []);

  const onMovieSearch = () => {
    console.log("clicked", searchObj);

    APIServices.searchMovie(searchObj)
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.results);
        console.log(response.results);
        setDisplay(true);
      })
      .catch((err) => window.alert(err.message));

    setSearchObj("");
  };
  return (
    <>
      <div className="w-full bg-cyan-900 flex flex-row max-sm:flex-col justify-between items-center">
        <div className=" w-1/3 flex justify-start pl-4 py-2 max-sm:w-full max-sm:justify-center text-center max-sm:text-center ">
          <img src={logo} className="w-40 pl-4" />
        </div>
        <div className="w-1/3 max-sm:w-full max-lg:w-1/2 text-center max-sm:my-2 flex flex-row justify-start  items-center">
          <div className="w-1/3 max-sm:w-full hover:bg-indigo-300 rounded-lg p-2 ">
            <span className="text-white text-center font-bold text-base">
              Top Rated
            </span>
          </div>
          <div className="w-1/3 hover:bg-indigo-300 rounded-lg max-sm:w-full p-2">
            <span className="text-white font-bold text-base ">Up Coming</span>
          </div>
          <div className="w-1/3 max-sm:w-full hover:bg-indigo-300 rounded-lg p-2">
            <span className="text-white font-bold text-base">Popular</span>
          </div>
          <div className="w-1/3 max-sm:w-full hover:bg-indigo-300 rounded-lg p-2">
            <span className="text-white font-bold text-base ">People</span>
          </div>
          <div className="w-1/3 max-sm:w-full hover:bg-indigo-300 rounded-lg p-2">
            <span className="text-white font-bold text-base ">more</span>
          </div>
        </div>
        <div className="w-1/2 flex flex-row  items-center  py-4 pr-2 max-sm:w-full max-sm:pl-4 ">
          <Input
            placeholder="Seach Movies"
            value={searchObj}
            onChange={(e) => {
              setSearchObj(e.target.value);
            }}
          />
          <CustomButton
            label="search"
            onClick={onMovieSearch}
            disabled={!searchObj}
          />
        </div>
      </div>
      <div className=" grid grid-cols-4 gap-10 my-8 px-8 max-sm:grid-cols-2 max-lg:grid-cols-3 max-lg:gap-4">
        {movies.length > 0 ? (
          movies.map((movie, index) => {
            return <CustomCard movie={movie} key={index} />;
          })
        ) : (
          <div className="w-full text-red-600 flex flex-row justify-center text-2xl font-bold">
            No Data avaliable
          </div>
        )}
      </div>
    </>
  );
};

export default Movies;
