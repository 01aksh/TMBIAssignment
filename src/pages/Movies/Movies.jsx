import React, { useEffect, useState } from "react";
import logo from "../../assets/img/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg";
import CustomCard from "../../components/CustomCard/CustomCard";
import Loader from "../../components/Loader/Loader";
import SearchBar from "../../components/SearchBar/SearchBar";
import APIServices from "../../service/MovieSearchService";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchObj, setSearchObj] = useState("");
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    APIServices.getMoviesApi()
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.results);
        setDisplay(true);
        if (searchObj === "") {
          setMovies(response.results);
        }
        console.log(response.results);
      })
      .catch((err) => window.alert(err.message));
  }, []);

  const onMovieSearch = async () => {
    console.log("clicked", searchObj);
    setDisplay(false);
    await APIServices.searchMovie(searchObj)
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
        <div className=" w-full flex justify-start pl-4 py-2 max-sm:w-full max-sm:justify-center text-center max-sm:text-center ">
          <img src={logo} className="w-40 pl-4" />
        </div>

        <div className="w-full flex flex-row  items-center  py-4 max-sm:w-full max-sm:ml-20 ">
          <SearchBar
            onClick={(searchObj) => onMovieSearch(searchObj)}
            disabled={!searchObj}
            placeholder="Seach Movies"
            value={searchObj}
            onChange={(e) => {
              setSearchObj(e.target.value);
            }}
          />
        </div>
      </div>
      <div className=" grid grid-cols-4 gap-10 my-8 px-8 max-sm:grid-cols-1 max-lg:grid-cols-3 max-lg:gap-4">
        {!display ? (
          <Loader />
        ) : (
          <>
            {movies.length > 0 ? (
              movies.map((movie, index) => {
                return <CustomCard movie={movie} key={index} />;
              })
            ) : (
              <div className="w-full text-red-600 flex flex-row justify-center text-2xl font-bold">
                No Data avaliable
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Movies;
