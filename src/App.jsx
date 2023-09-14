import "./App.css";
import Footer from "./components/Footer/Footer";
import MovieList from "./components/MovieList/MovieList";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="appMain">
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={<MovieList types="popular" title="Popular" />}
          />
          <Route
            path="/topRated"
            element={<MovieList types="top_rated" title="Top Rated" />}
          />
          <Route
            path="/upComing"
            element={<MovieList types="upcoming" title="UpComing" />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
