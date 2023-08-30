import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  async function fetchApi() {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=7f533d2cdc2e890da0986033612db155"
    );
    const data = await response.json();
    setMovies(data.results);
  }

  return (
    <section className="movieList">
      <header className="alignCenter movieListHeader">
        <h2 className="movieListHeading">Popular 🔥</h2>
        <div className="movieListFs">
          <ul className="movieFilter">
            <li className="movieFilterItem active">5+</li>
            <li className="movieFilterItem">6+</li>
            <li className="movieFilterItem">7+</li>
          </ul>
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
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
