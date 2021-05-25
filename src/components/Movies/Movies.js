import "./Movies.css";
import Button from "../Buttons/Button";

const IMG_API = "https://image.tmdb.org/t/p/original/";
// Using props from omdb api to show information
const Movie = ({ title, poster_path, vote_average }) => (
  <div className="movie-card">
    <div className="movie-poster">
      <img src={IMG_API + poster_path} alt={title} />
      <div className="movie-info">
        <span className="votes">
          <i class="fas fa-star"></i>
          {vote_average}
        </span>
      </div>
      <Button />
    </div>
  </div>
);

export default Movie;
