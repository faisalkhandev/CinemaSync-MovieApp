import MovieCard from "./MovieCard";
import "./MovieList.css";

const MovieList = () => {
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
      <MovieCard />
    </section>
  );
};

export default MovieList;
