import React from 'react';
import './FilmDetail.css';

export default function FilmDetail({
  handleClick,
  title,
  director,
  image,
  original_title,
  description,
}) {
  return (
    <div className="movie-card">
      <h1>{title}</h1>
      <h2>{original_title}</h2>
      <img src={image} alt="movie image" />
      <h3>{director}</h3>
      <span>{description}</span>
      <button onClick={handleClick}>Back to List</button>
    </div>
  );
}
