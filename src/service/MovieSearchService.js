import { getBaseURL } from "../api/config";

class APIServices {
  getMoviesApi = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkM2FkNGYzY2RhOTk4MjFmZjQ5NzZjMzI0NTFhMzc2YyIsInN1YiI6IjY0YzVmZGU1NjNlNmZiMDExYjNhNWE5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yoi5JLmM_V_FfPCrYvfUfDr67j8gZAkjy8ml_9kpzRY",
      },
    };
    return fetch(`${getBaseURL()}trending/movie/week`, options);
  };
  searchMovie = async (search) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkM2FkNGYzY2RhOTk4MjFmZjQ5NzZjMzI0NTFhMzc2YyIsInN1YiI6IjY0YzVmZGU1NjNlNmZiMDExYjNhNWE5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yoi5JLmM_V_FfPCrYvfUfDr67j8gZAkjy8ml_9kpzRY",
      },
    };

    return fetch(`${getBaseURL()}search/movie?query=${search}`, options);
  };
}
export default new APIServices();
