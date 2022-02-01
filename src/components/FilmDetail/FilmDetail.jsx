import React from 'react';
import './FilmDetail.css';

export default function FilmDetail({ title, director, image, original_title, description }) {
  return (
    <div className="movie-card">
      <span>{title}</span>
      <img src={image} alt="movie image" />
      <span>{director}</span>
      <span>{original_title}</span>
      <span>{description}</span>
    </div>
  );
}
