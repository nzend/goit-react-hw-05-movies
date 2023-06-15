import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getBySearch } from '../fetchCards';

// ___________________ Import Components __________
import Searchbar from '../components/Searchbar/Searchbar';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import Loader from '../components/Loader/Loader';
import Button from '../components/Button/Button';

// ____________________ Import css ______________
import css from './Movies.module.css';

const Movies = () => {
  // _____________________________State_______________________
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  // __________________________Use Params_____________________________

  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';
  const location = useLocation();
  // _______________________________Use Effect__________
  useEffect(() => {
    const getByQuery = async () => {
      try {
        const response = await getBySearch(searchQuery, page);
        const weekTranding = response.results;

        if (weekTranding.length === 0) {
          return setError(`No results were found for ${searchQuery}!`);
        }

        setMovies(prevItems => [...prevItems, ...weekTranding]);
      } catch (error) {
        setError('Something went wrong. Try again.');
      } finally {
        setIsLoading(false);
      }
    };
    getByQuery();
  }, [searchQuery, page]);

  // ___________________________ State config ____________
  const handleSubmit = newQuery => {
    if (newQuery.trim() === '') {
      alert('Порожній запит');
      return;
    } else if (newQuery === searchQuery) {
      alert('Введіть новий запит');
      return;
    }

    setPage(1);
    setSearchQuery(newQuery);
    setMovies([]);
    setError(null);
    setIsLoading(true);
  };
  const onNextPage = () => {
    setIsLoading(true);
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className={css.app}>
      <Searchbar onSubmit={handleSubmit} />
      {error && <div className={css.error__notification}>{error}</div>}
      {movies.length !== 0 && searchQuery !== '' && (
        <>
          <ImageGallery movies={movies} />
          {isLoading && <Loader />}
          {movies.length >= 12 ? (
            <Button onNextPage={onNextPage} />
          ) : (
            <div className={css.error__notification}>Картинки закінчилися</div>
          )}
        </>
      )}
      {isLoading && <Loader />}
    </div>
  );
};

export default Movies;

// ________________________________

const App1 = () => {};
