import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  console.log(movieId);

    // useEffect(() => {
  //     // Reqest
  // }, [])
  return <div>It is Reviews! {movieId}</div>;
};
export default Reviews;
