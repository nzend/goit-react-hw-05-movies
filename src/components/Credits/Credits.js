import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastInfo } from '../../fetchCards';
import notAvailablePhoto from '../../Images/photo-not-available.jpg';

const Credits = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const getCast = async () => {
      try {
        const response = await getCastInfo(movieId);
        const movieCast = response.cast;

        setCast(movieCast);
      } catch (error) {
        console.log(error);
      }
    };
    getCast();
  }, []);
  console.log('Movie ID', movieId);
  // console.log(movieId);

  return (
    <div>
      It is Cast! {movieId}
      <ul>
        {cast.map(actor => {
          console.log(actor);
          return (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                    : notAvailablePhoto
                }
                alt="img"
              />
              <h3>{actor.name}</h3>
              <p>
                <span>Character:</span> {actor.character}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Credits;
