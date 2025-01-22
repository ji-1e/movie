import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getPopularMovies } from "./api"
import MovieCard from './MovieCard.jsx';
import './styles/App.css';

const Home = () => {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const moviesData = await getPopularMovies(); // API 호출
          setMovies(moviesData); // 상태 업데이트
        } catch (error) {
          console.error("Failed to fetch movies", error);
        }
      };
      fetchMovies();
    }, []);
    console.log(movies)
  return (
    <div className="home">
        <div className="movie-main">
            {movies.map((movie) => (
                <MovieCard
                key={movie.id}
                title={movie.title}
                poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                rating={movie.vote_average}
                releaseDate={movie.release_date}
                onClick={() => navigate(`/details/${movie.id}`)}
                />
            ))}
            
        </div>
    </div>
  );
};
export default Home;
