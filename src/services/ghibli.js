export async function fetchGhibli() {
  const resp = await fetch(`https://ghibliapi.herokuapp.com/films`);
  const data = await resp.json();
  return data;
}

export async function fetchFilmDetails(filmId) {
  const resp = await fetch(`https://ghibliapi.herokuapp.com/films/${filmId}`);
  const data = await resp.json();
  return data;
}
