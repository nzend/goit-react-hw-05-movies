import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getBySearch } from '../../fetchCards';

// ___________________ Import Components __________
import Searchbar from '../../components/Searchbar/Searchbar';
import ImageGallery from '../../components/MovieGallery/MovieGallery';
import Loader from '../../components/Loader/Loader';

// ____________________ Import css ______________
import css from './Movies.module.css';

const Movies = () => {
  // _____________________________State_______________________

  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  // __________________________Use Params_____________________________

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  // _______________________________Use Effect__________
  useEffect(() => {
    if (query === '') return;

    const getByQuery = async () => {
      try {
        const response = await getBySearch(query, page);
        const searchMovies = response.results;

        if (searchMovies.length === 0) {
          return setError(`No results were found for ${query}!`);
        }

        setMovies(searchMovies);
      } catch (error) {
        setError('Something went wrong. Try again.');
      } finally {
        setIsLoading(false);
      }
    };
    getByQuery();
  }, [query, page]);

  // ___________________________ State config ____________
  const handleSubmit = newQuery => {
    if (newQuery.trim() === '') {
      alert('Порожній запит');
      return;
    } else if (newQuery === query) {
      alert('Введіть новий запит');
      return;
    }

    setPage(1);

    setMovies([]);
    setError(null);
    setIsLoading(true);
    setSearchParams({ query: newQuery });
  };

  return (
    <div className={css.app}>
      <Searchbar onSubmit={handleSubmit} />
      {error && <div className={css.error__notification}>{error}</div>}
      {movies.length !== 0 && query !== '' && (
        <>
          <ImageGallery movies={movies} />
          {isLoading && <Loader />}
        </>
      )}
      {isLoading && <Loader />}
    </div>
  );
};

export default Movies;

// ________________________________
