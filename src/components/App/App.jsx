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
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDeteils />}>
          <Route path="cast" element={<Credits />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};


export default App;
