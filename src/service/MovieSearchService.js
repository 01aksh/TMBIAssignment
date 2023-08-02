import { getBaseURL, getOptions } from "../api/config";

class APIServices {
  getMoviesApi = async () => {
    return fetch(`${getBaseURL()}trending/movie/week`, getOptions());
  };

  searchMovieApi = async (search) => {
    return fetch(`${getBaseURL()}search/movie?query=${search}`, getOptions());
  };
}
export default new APIServices();
