import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsInfo } from '../../fetchCards';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const getReviews = async () => {
      try {
        const response = await getReviewsInfo(movieId);
        const movieReview = response.results;

        setReviews(movieReview);
      } catch (error) {
        console.log(error);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <div className={css.reviews}>
      <ul>
        {reviews.map(review => {
          return (
            <li className={css.reviews__item} key={review.id}>
              <span className={css.reviews__author}>
                Author: <span className={css.author__name}>{review.author}</span>
              </span>
              <p className={css.reviews__content}>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Reviews;
