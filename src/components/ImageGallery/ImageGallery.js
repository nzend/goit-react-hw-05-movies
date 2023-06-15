import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ImageGallery({ movies }) {
  return (
    <ul className={css.gallery}>
      {movies.map(movie => (
        <ImageGalleryItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

export default ImageGallery;

ImageGallery.propTypes = {
  items: PropTypes.array,
};
