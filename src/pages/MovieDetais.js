import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useRef, Suspense } from 'react';
// import { useEffect } from "react";

const MovieDeteils = () => {
  const { movieId } = useParams();

  const location = useLocation();
  console.log(location);
  const backLinckLocationsRef = useRef(location.state?.from ?? '/search');
  console.log(backLinckLocationsRef);

  //   console.log(movieId);

  // useEffect(() => {
  //     // Reqest
  // }, [])
  return (
    <>
      <Link to={backLinckLocationsRef.current}>Back</Link>
      <div>Movie Details: {movieId}</div>
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
