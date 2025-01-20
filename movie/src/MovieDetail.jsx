import React, { useState } from "react";
import movieDetailData from "./data/movieDetailData.json";
import "./styles/MovieDetail.css";

const MovieDetail = () => {
    const [movie] = useState(movieDetailData);

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
                <div className="movie-genres">장르: {movie.genres.join(",")}</div>
                <p className="movie-overview">{movie.overview}</p>
            </div>
        </div>
    )
}

export default MovieDetail;