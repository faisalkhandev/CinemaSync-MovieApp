import "./MovieList.css";

const MovieCard = () => {
  return (
    <a href="" className="movieCard">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy1yYevfu_1beTo5NGDE4FqYjJL8CmgOb5cH5oMrxf&s.jpg"
        alt="fast and furious 5"
        className="moviePoster"
      />

      <div className="movieDetails">
        <h3 className="movieDetailsHeading"> Movie Name</h3>
        <div className="movieDateRate">
          <p>10-20-2000</p>
          <p>8.0 ⭐</p>
          <p className="movieDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            officiis, explicabo incidunt architecto blanditiis laudantium
            quisquam omnis natus earum in quibusdam impedit, repudiandae
            recusandae necessitatibus maiores aspernatur laborum nam nemo?
          </p>
        </div>
      </div>
    </a>
  );
};

export default MovieCard;
