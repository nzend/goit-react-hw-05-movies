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
  console.log("SEARCH PARAMS",searchParams);
  const query = searchParams.get('query') ?? '';
  console.log(query);
  
  // _______________________________Use Effect__________
  useEffect(() => {
    const getByQuery = async () => {
      try {
        const response = await getBySearch(query, page);
        const searchMovies = response.results;

        if (searchMovies.length === 0) {
          return setError(`No results were found for ${query}!`);
        }

        setMovies(prevItems => [...prevItems, ...searchMovies]);
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
    } else if (newQuery === searchQuery) {
      alert('Введіть новий запит');
      return;
    }

    setPage(1);
    setSearchQuery(newQuery);
    setMovies([]);
    setError(null);
    setIsLoading(true);
    setSearchParams({query: newQuery})
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


