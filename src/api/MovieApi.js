import axios from "axios";

export default function SearchMovieByName(movieName) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${movieName}`;
  return axios.get(url).then((response) => {
    console.log(response);
  });
}
