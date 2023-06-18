import ImageGalleryItem from '../MovieGalleryItem/MovieGalleryItem';
import css from './MovieGallery.module.css';
import PropTypes from 'prop-types';


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
