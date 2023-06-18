import { useEffect, useState } from 'react';
import { getWeekTrending } from '../../fetchCards';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [trandingMovie, setTrandingMovie] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const getTranding = async () => {
      try {
        const response = await getWeekTrending();
        const weekTranding = response.results;

        setTrandingMovie(weekTranding);
      } catch (error) {
        console.log(error);
      }
    };
    getTranding();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {trandingMovie.map(trandMovie => {
          return (
            <li key={trandMovie.id}>
              <Link state={{ from: location }} to={`/movies/${trandMovie.id}`}>
                {trandMovie.title ?? trandMovie.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
