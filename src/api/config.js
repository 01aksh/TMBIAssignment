import axios from "axios";

export const getBaseURL = () => {
  // const BASEURL = `https://api.themoviedb.org/3/`;
  const BASEURL = `http://localhost:5000/`;

  return BASEURL;
};

export const getAxios = () => {
  return axios;
};
