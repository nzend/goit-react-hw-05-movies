// import React, { useState, useEffect } from 'react';
// import Button from '../Button/Button';
// import ImageGallery from '../ImageGallery/ImageGallery';
// import css from './App.module.css';
// import fetchImages from '../../fetchCards';
// import Searchbar from '../Searchbar/Searchbar';
// import Loader from '../Loader/Loader';
// // ________________________
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

// import Home from '../../pages/Home';
// import Movies from 'pages/Movies';
// import MovieDeteils from 'pages/MovieDetais';
import Layout from '../Layout/Layout';
// import Reviews from 'components/Reviews/Reviews';
import Credits from 'components/Credits/Credits';
const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const MovieDeteils = lazy(() => import('../../pages/MovieDetais'));


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="search" element={<Movies />} />
        <Route path="search/:movieId" element={<MovieDeteils />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="credits" element={<Credits />} />
        </Route>
      </Route>
    </Routes>
  );
};

// const App = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [page, setPage] = useState(1);
//   const [items, setItems] = useState([]);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const getImages = async () => {
//       try {
//         const response = await fetchImages(searchQuery, page);
//         if (response.length === 0) {
//           return setError(`No results were found for ${searchQuery}!`);
//         }

//         setItems(prevItems => [...prevItems, ...response]);
//       } catch (error) {
//         setError('Something went wrong. Try again.');
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     getImages();
//   }, [searchQuery, page]);

//   const handleSubmit = newQuery => {
//     if (newQuery.trim() === '') {
//       alert('Порожній запит');
//       return;
//     } else if (newQuery === searchQuery) {
//       alert('Введіть новий запит');
//       return;
//     }

//     setPage(1);
//     setSearchQuery(newQuery);
//     setItems([]);
//     setError(null);
//     setIsLoading(true);
//   };

//   const onNextPage = () => {
//     setIsLoading(true);
//     setPage(prevPage => prevPage + 1);
//   };

//   return (
//     <div className={css.app}>
//       <Searchbar onSubmit={handleSubmit} />
//       {error && <div className={css.error__notification}>{error}</div>}
//       {items.length !== 0 && searchQuery !== '' && (
//         <>
//           <ImageGallery items={items} />
//           {isLoading && <Loader />}
//           {items.length >= 12 ? (
//             <Button onNextPage={onNextPage} />
//           ) : (
//             <div className={css.error__notification}>Картинки закінчилися</div>
//           )}
//         </>
//       )}
//       {isLoading && <Loader />}
//     </div>
//   );
// };
export default App;
