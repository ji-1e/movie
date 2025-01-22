import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "./api"; // Axios 인스턴스 가져오기
import "./styles/MovieDetail.css";


const MovieDetail = () => {
    const { id } = useParams(); // URL에서 영화 ID 가져오기
    const [movie, setMovie] = useState(null);
  
    useEffect(() => {
      const fetchMovieDetail = async () => {
        try {
          const response = await api.get(`/movie/${id}`); // 영화 상세 정보 요청
          setMovie(response.data);
        } catch (error) {
          console.error(`Error fetching details for movie ID ${id}:`, error);
        }
      };
      fetchMovieDetail();
    }, [id]);

    return (
        <div className="movie-detail">
            <div className="movie-backdrop"></div>
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={`${movie.title} poster`} />
            </div>
            <div className="movie-info">
                <h1>{movie.title}</h1>
                <p>평점 : {movie.vote_average}</p>
                <div className="movie-genres">{
                movie.genres.map((genre) => genre.name).join(", ")}</div>
                <p className="movie-overview">{movie.overview}</p>
            </div>
        </div>
    )
}

export default MovieDetail;