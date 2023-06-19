import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useRef, Suspense, useEffect, useState } from 'react';

import { getInfoMovie } from '../../fetchCards';

import MovieCard from '../../components/MovieCard/MovieCard';

import css from './MovieDetails.module.css';

const MovieDeteils = () => {
  const [movieInfo, setMovieInfo] = useState({});

  const location = useLocation();
  const { movieId } = useParams();

  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
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
      <Link className={css.back__btn} to={backLinkHref.current}>
        Back
      </Link>
      <MovieCard movieInfo={movieInfo}></MovieCard>

      <ul className={css.config__list}>
        <li className={css.config__item}>
          <Link className={css.config__link} to="cast">
            Cast
          </Link>
        </li>
        <li className={css.config__item}>
          <Link className={css.config__link} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDeteils;
