import { useParams } from 'react-router-dom';

const Credits = () => {
  const { movieId } = useParams();
  console.log(movieId);

    // useEffect(() => {
  //     // Reqest
  // }, [])
  return <div>It is Credits! {movieId}</div>;
};
export default Credits;
