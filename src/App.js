import "./App.css";
import Header from "./components/Header/Header";
import Logo from "./components/Logo/Logo";
import Movie from "./components/Movies/Movies";
import React, { useEffect, useState } from "react";

const API_KEY = `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_KEY}&language=en-US`;

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_KEY).then((res) =>
      res.json().then((data) => {
        console.log(data);
        setMovies(data.results);
      })
    );
  }, []);

  return (
    <div className="app">
      <Logo />
      <Header />
      <h1 className="movie-section-title">
        <strong>Top</strong> trending movies
      </h1>
      <div className="movie-container">
        {movies.length > 0 &&
          // spreads out the movie object to Movie function
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </div>
  );
}

export default App;
