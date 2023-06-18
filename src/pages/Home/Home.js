import { useEffect, useState } from 'react';
import { getWeekTrending } from '../../fetchCards';
import { Link, useLocation } from 'react-router-dom';
import css from './Home.module.css';

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
      <h1 className={css.tranding__title}>Trending today</h1>
      <ul className={css.tranding__list}>
        {trandingMovie.map(trandMovie => {
          return (
            <li className={css.tranding__item} key={trandMovie.id}>
              <Link
                className={css.tranding__link}
                state={{ from: location }}
                to={`/movies/${trandMovie.id}`}
              >
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
