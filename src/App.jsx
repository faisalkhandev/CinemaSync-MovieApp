import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="appMain">
      <Navbar />
      <MovieList />
    </div>
  );
}

export default App;
