import React from 'react';
import './GhibliList.css';

export default function GhibliList({ films }) {
  return (
    <div className="img-container">
      {films.map((film) => (
        <div key={film.id} className="img-card">
          <span>{film.title}</span>
          <img src={film.image} alt="list of films from ghibli" />
        </div>
      ))}
    </div>
  );
}
