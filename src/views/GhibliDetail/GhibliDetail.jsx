import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFilmDetails } from '../../services/ghibli';
import FilmDetail from '../../components/FilmDetail/FilmDetail';

export default function GhibliDetail() {
  const [detail, setDetail] = useState([]);
  const { filmId } = useParams();

  useEffect(() => {
    async function fetchDetails() {
      const filmDetails = await fetchFilmDetails(filmId);
      console.log('detail', detail);
      setDetail(filmDetails);
    }
    fetchDetails();
  }, []);

  return (
    <div>
      <FilmDetail />
    </div>
  );
}
