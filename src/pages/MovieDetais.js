import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useRef, Suspense, useEffect, useState } from 'react';

import { getInfoMovie } from '../fetchCards';

import MovieCard from "../components/MovieCard/MovieCard";

const MovieDeteils = () => {
  const [movieInfo, setMovieInfo] = useState({});

  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
    if (!movieInfo) {
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
  }, []);

  const genres = movieInfo.genres;
  console.log(genres);
  // ganres.map(g => console.log(g));

  const location = useLocation();
  // console.log(location);
  const backLinckLocationsRef = useRef(location.state?.from ?? '/movies');
  // console.log(backLinckLocationsRef);

  //   console.log(movieId);

  // useEffect(() => {
  //     // Reqest
  // }, [])
  return (
    <>
      <Link to={backLinckLocationsRef.current}>Back</Link>
      <MovieCard movieInfo={movieInfo} ></MovieCard>
      
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
