import css from './MovieGalleryItem.module.css';
import { Link, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

const ImageGalleryItem = ({ movie }) => {
  const location = useLocation();
  return (
    <>
      <li key={movie} className={css.gallery__item}>
        <Link to={`${movie.id}`} state={{ from: location }}>
          {movie.title}
        </Link>
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.object,
};

export default ImageGalleryItem;
