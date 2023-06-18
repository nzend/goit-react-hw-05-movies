import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsInfo } from '../../fetchCards';

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
    <div>
      It is Reviews! {movieId}
      <ul>
        {reviews.map(review => {
         
          return (
            <li key={review.id}>
              <span>Author: {review.author}</span>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Reviews;
