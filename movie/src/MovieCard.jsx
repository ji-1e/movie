import React from 'react';
import './styles/MovieCard.css';

const MovieCard = ({ poster, title, rating, releaseDate, onClick }) => {
  return (
    <div className="movie-card" onClick={onClick}>
      <img src={poster} alt={`${title} Poster`} className="movie-poster" />
      <div className="movie-info">
        <h2>{title}</h2>
        <p>평점: {rating}</p>
        <p>개봉일: {releaseDate}</p>
      </div>
    </div>
  );
};

export default MovieCard;
