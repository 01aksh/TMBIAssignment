import axios from "axios";

export const getBaseURL = () => {
  const BASEURL = `https://api.themoviedb.org/3/`;
  return BASEURL;
};

export const getAxios = () => {
  return axios;
};
