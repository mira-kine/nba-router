import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFilmDetails } from '../../services/ghibli';
import FilmDetail from '../../components/FilmDetail/FilmDetail';

export default function GhibliDetail() {
  const [detail, setDetail] = useState({});
  const { filmId } = useParams();

  useEffect(() => {
    async function fetchDetails() {
      const filmDetails = await fetchFilmDetails(filmId);
      setDetail(filmDetails);
    }
    fetchDetails();
  }, []);

  const { title, director, producer, original_title, image, description } = detail;
  return (
    <div>
      <FilmDetail
        title={title}
        director={director}
        producer={producer}
        original_title={original_title}
        description={description}
        image={image}
      />
    </div>
  );
}
