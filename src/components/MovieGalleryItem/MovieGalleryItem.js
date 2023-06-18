import css from './MovieGalleryItem.module.css';
import { Link, useLocation } from 'react-router-dom';
import notAvailablePhoto from '../../Images/photo-not-available.jpg';

import PropTypes from 'prop-types';

const ImageGalleryItem = ({ movie }) => {
  const location = useLocation();
  return (
    <>
      <li key={movie} className={css.gallery__item}>
        <Link to={`${movie.id}`} state={{ from: location }}>
          <img
            className={css.card__img}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                : notAvailablePhoto
            }
            alt="img"
          />
          <h2 className={css.movie__title}>{ movie.title }</h2>
        </Link>
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.object,
};

export default ImageGalleryItem;
