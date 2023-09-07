import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="appMain">
      <Navbar />
      <MovieList types="popular" title="Popular" />
      <MovieList types="top_rated" title="Top Rated" />
      <MovieList types="upcoming" title="UpComing" />
    </div>
  );
}

export default App;
