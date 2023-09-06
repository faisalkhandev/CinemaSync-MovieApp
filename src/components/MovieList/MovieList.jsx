/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import _ from "lodash";

import "./MovieList.css";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = _.orderBy(
        movies,
        filterMovies,
        [sort.by],
        [sort.order]
      );
      setFilterMovies(sortedMovies);
    }
  }, [sort]);

  async function fetchApi() {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=7f533d2cdc2e890da0986033612db155"
    );
    const data = await response.json();
    setMovies(data.results);
    setFilterMovies(data.results);
  }

  // Handling Rating
  function handleRating(rate) {
    // console.log("rateSelected", rate);
    if (minRating === rate) {
      setMinRating(0);
      setFilterMovies(movies);
    } else {
      setMinRating(rate);
      const filterMovies = movies.filter(
        (movie) => movie.vote_average >= rate && movie.vote_average < rate + 1
      );
      setFilterMovies(filterMovies);
    }
  }

  function handleSort(e) {
    const { name, value } = e.target;
    setSort((prev) => {
      return { ...prev, [name]: value };
    });
  }
  // console.log("sort ", sort);

  return (
    <section className="movieList">
      <header className="alignCenter movieListHeader">
        <h2 className="movieListHeading">Popular 🔥</h2>
        <div className="movieListFs">
          <FilterGroup
            minRating={minRating}
            onClickFilter={handleRating}
            ratings={[8, 7, 6]}
          />

          <select
            className="movieSorting"
            onChange={handleSort}
            name="by"
            value={sort.by}
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select
            className="movieSorting"
            onChange={handleSort}
            name="sort"
            value={sort.order}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
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
