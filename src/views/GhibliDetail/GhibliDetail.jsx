import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFilmDetails } from '../../services/ghibli';
import FilmDetail from '../../components/FilmDetail/FilmDetail';
import { useHistory } from 'react-router-dom';

export default function GhibliDetail() {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { filmId } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function fetchDetails() {
      const filmDetails = await fetchFilmDetails(filmId);
      setDetail(filmDetails);
      setLoading(false);
    }
    fetchDetails();
  }, [filmId]);

  if (loading) {
    return <h1>Loading</h1>;
  }

  const { title, director, producer, original_title, image, description } = detail;
  const handleClick = () => {
    history.push(`/films`);
  };

  return (
    <div>
      <FilmDetail
        title={title}
        director={director}
        producer={producer}
        original_title={original_title}
        description={description}
        image={image}
        handleClick={handleClick}
      />
    </div>
  );
}
