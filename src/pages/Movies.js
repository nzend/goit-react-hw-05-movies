// import { useEffect } from "react";
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([
    'movie-1',
    'movie-2',
    'movie-3',
    'movie-4',
    'movie-5',
  ]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';

  const location = useLocation();
  console.log(location);

  const visibleMovies = movies.filter(movie => movie.includes(movieId));

  const updateQueryString = evt => {
    if (evt.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: evt.target.value });
  };

  //   useEffect(() => {
  //     // Reqest
  //   }, []);
  return (
    <>
      <input type="text" value={movieId} onChange={updateQueryString} />
      <button type="button" onClick={() => setSearchParams({ c: 'hello' })}>
        change sp
      </button>
      <ul>
        {visibleMovies.map(movie => {
          return (
            <li key={movie}>
              <Link to={`${movie}`} state={{from: location}}>{movie}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Movies;
