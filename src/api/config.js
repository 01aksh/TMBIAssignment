import axios from "axios";

export const getBaseURL = () => {
  // const BASEURL = `https://api.themoviedb.org/3/`;
  const BASEURL = `http://localhost:5000/`;
  return BASEURL;
};

export const getAxios = () => {
  return axios;
};

export const getOptions = () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkM2FkNGYzY2RhOTk4MjFmZjQ5NzZjMzI0NTFhMzc2YyIsInN1YiI6IjY0YzVmZGU1NjNlNmZiMDExYjNhNWE5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yoi5JLmM_V_FfPCrYvfUfDr67j8gZAkjy8ml_9kpzRY",
    },
  };
  return options;
};
