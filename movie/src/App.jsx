import React, {useState} from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import movieListData from './data/movieListData.json';
import Layout from "./Layout";
import MovieCard from './MovieCard.jsx';
import MovieDetail from './MovieDetail.jsx';
import './styles/App.css';

const App = () => {
  const navigate = useNavigate();
  const [movies] = useState(movieListData.results);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <div className="App">
              <div className="movie-main">
                {movies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    title={movie.title}
                    poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    rating={movie.vote_average}
                    releaseDate={movie.release_date}
                    onClick={() => navigate("/details")}
                  />
                ))}
              </div>
            </div>
          }
       />
        <Route path="/details" element={<MovieDetail />} />
      </Route>
    </Routes>
  );
};
export default App;
