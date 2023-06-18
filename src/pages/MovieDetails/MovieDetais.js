import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useRef, Suspense, useEffect, useState } from 'react';

import { getInfoMovie } from '../../fetchCards';

import MovieCard from '../../components/MovieCard/MovieCard';

const MovieDeteils = () => {
  const [movieInfo, setMovieInfo] = useState({});

  const location = useLocation();
  const { movieId } = useParams();

  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (movieInfo === {}) {
      return;
    }
    const getInfo = async () => {
      try {
        const response = await getInfoMovie(movieId);

        setMovieInfo(response);
      } catch (error) {
        console.log(error);
      }
    };
    getInfo();
  }, [movieId]);

  return (
    <>
      <Link to={backLinkHref.current}>Back</Link>
      <MovieCard movieInfo={movieInfo}></MovieCard>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDeteils;
