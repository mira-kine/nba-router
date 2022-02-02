import React from 'react';
import { Link } from 'react-router-dom';
import './GhibliList.css';

export default function GhibliList({ films }) {
  return (
    <div className="img-container">
      <ul>
        {films.map(({ id, image, title }) => (
          <div key={id} className="img-card">
            <li>{title}</li>
            <Link key={id} to={`/${id}`}>
              <img src={image} alt="list of films from ghibli" />
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}
