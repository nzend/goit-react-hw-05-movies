import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastInfo } from '../../fetchCards';
import notAvailablePhoto from '../../Images/photo-not-available.jpg';
import css from './Credits.module.css';
const Credits = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const getCast = async () => {
      try {
        const response = await getCastInfo(movieId);
        const movieCast = response.cast;

        setCast(movieCast);
      } catch (error) {
        console.log(error);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <div className={css.cast__container}>
      <ul className={css.cast__list}>
        {cast.map(actor => {
          return (
            <li className={css.cast__item} key={actor.id}>
              <img
                className={css.cast__img}
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                    : notAvailablePhoto
                }
                alt="img"
              />
              <h3 className={css.actor__name}>{actor.name}</h3>
              <p className={css.cast__character}>
                Character: 
                <span className={css.actor__role}>{actor.character}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Credits;
