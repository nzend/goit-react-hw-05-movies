import notAvailablePhoto from '../../Images/photo-not-available.jpg';
import css from './MovieCard.module.css';
const MovieCard = ({ movieInfo }) => {
  const getYear = () => new Date(movieInfo.release_date).getFullYear();
  return (
    <div className={css.card__container}>
      <div className={css.card}>
        <img
          className={css.card__img}
          src={
            movieInfo.poster_path
              ? `https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`
              : notAvailablePhoto
          }
          alt="img"
        />
        <div className={css.card__info}>
          <h3 className={css.card__title}>
            {movieInfo.original_title ?? movieInfo.title} ({getYear()})
          </h3>
          <span className={css.card__score}>
            User score: <span className={css.score}>{Math.round(movieInfo.vote_average * 10)}%</span>
          </span>
          <h3 className={css.card__title}>Owerview</h3>
          <p className={css.card__overview}>{movieInfo.overview}</p>
          <h3 className={css.card__title}>Genres</h3>
          <ul className={css.card__genres}>
            {movieInfo &&
              movieInfo.genres?.map(ganre => {
                return (
                  <li className={css.card__genres__item} key={ganre.id}>
                    {ganre.name}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
