import notAvailablePhoto from '../../Images/photo-not-available.jpg';

const MovieCard = ({ movieInfo }) => {
  const getYear = () => new Date(movieInfo.release_date).getFullYear();
  return (
    <div>
      <div className="movie__card">
        <img
          src={
            movieInfo.poster_path
              ? `https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`
              : notAvailablePhoto
          }
          alt="img"
        />
        <h3>
          {movieInfo.original_title ?? movieInfo.title} ({getYear()})
        </h3>
        <span>User score: {Math.round(movieInfo.vote_average * 10)}%</span>
        <h3>Owerview</h3>
        <p>{movieInfo.overview}</p>
        <h3>Genres</h3>
        <ul>
          {movieInfo &&
            movieInfo.genres?.map(ganre => {
              return <li key={ganre.id}>{ganre.name}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default MovieCard;
