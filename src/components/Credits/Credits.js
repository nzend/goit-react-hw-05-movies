import { useParams } from 'react-router-dom';

const Credits = () => {
  const { movieId } = useParams();
  // console.log(movieId);

    // useEffect(() => {
  //     // Reqest
  // }, [])
  return <div>It is Cast! {movieId}</div>;
};
export default Credits;
