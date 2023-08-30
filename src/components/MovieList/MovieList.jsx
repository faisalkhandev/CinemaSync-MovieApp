/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";
import FilterGroup from "./FilterGroup";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  console.log("moviesData ", movies);
  const [filterMovies, setFilterMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);

  function handleRating(rate) {
    // console.log("rateSelected", rate);
    if (minRating === rate) {
      setMinRating(0);
      setFilterMovies(movies);
    } else {
      setMinRating(rate);
      const filterMovies = movies.filter((movie) => movie.vote_average >= rate);
      setFilterMovies(filterMovies);
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);

  async function fetchApi() {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=7f533d2cdc2e890da0986033612db155"
    );
    const data = await response.json();
    setMovies(data.results);
    setFilterMovies(data.results);
  }

  return (
    <section className="movieList">
      <header className="alignCenter movieListHeader">
        <h2 className="movieListHeading">Popular 🔥</h2>
        <div className="movieListFs">
          <FilterGroup minRating={minRating} handleRating={handleRating} />
          <select className="movieSorting">
            <option value="">SortBy</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>
          <select className="movieSorting">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </header>
      <div className="movieCards">
        {filterMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
