/* eslint-disable react/prop-types */
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a
      href={`https://www.themoviedb.org/movie/${movie.id}`}
      target="_blank"
      className="movieCard"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="moviePoster"
      />

      <div className="movieDetails">
        <h3 className="movieDetailsHeading">{movie.title} </h3>
        <div className="movieDateRate">
          <p>{movie.release_date}</p>
          <p>{movie.vote_average}⭐</p>
        </div>
        <div className="movieDescription">
          <p>{movie.overview.slice(0, 100) + "..."}</p>
        </div>
      </div>
    </a>
  );
};

export default MovieCard;
