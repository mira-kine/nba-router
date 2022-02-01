import React, { useEffect, useState } from 'react';
import { fetchGhibli } from '../../services/ghibli';
import GhibliList from '../../components/GhibliList/GhibliList';
export default function Home() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGhibli();
      setFilms(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }
  return (
    <>
      <GhibliList films={films} />
    </>
  );
}
