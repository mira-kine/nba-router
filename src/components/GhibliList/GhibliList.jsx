import React from 'react';
import { Link } from 'react-router-dom';
import './GhibliList.css';

export default function GhibliList({ films }) {
  return (
    <div className="img-container">
      <ul>
        {films.map((item) => {
          return (
            <div key={item.id} className="img-card">
              <li>{item.title}</li>
              <Link to={`/films/${item.id}`}>
                <img src={item.image} alt="list of films from ghibli" />
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
