import css from './ImageGalleryItem.module.css';
import { Link, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

const ImageGalleryItem = ({ movie }) => {
  console.log(movie);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const movieId = searchParams.get('movieId') ?? '';
  const location = useLocation();
  return (
    <>
      <li key={movie} className={css.gallery__item}>
        <Link to={`${movie}`} state={{ from: location }}>
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
