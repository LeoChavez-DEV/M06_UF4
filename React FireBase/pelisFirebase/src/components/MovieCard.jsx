import React from 'react';
import './style/MovieCard.css';

const MovieCard = ({ title, image, rate, direction }) => {
  return (
    <div className="movie-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>Dirección: {direction}</p>
      <p>Nota: {rate}</p>
    </div>
  );
};

export default MovieCard;
