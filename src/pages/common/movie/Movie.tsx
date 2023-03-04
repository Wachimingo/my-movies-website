import { imageBaseUrl } from "../../constants";
import { Div } from "../containers";
import { P } from "../p";
import styles from "./movie.module.scss";

export const Movie = ({ movie, children }: any) => {
  return (
    <Div>
      {movie?.title && <h1>{movie?.title}</h1>}
      {movie?.poster_path && <img src={imageBaseUrl + "/w185" + movie?.poster_path} alt={movie?.title} />}
      <Div className={styles["card-body"]}>
        {movie?.release_date && <P>Realesed in: {movie?.release_date}</P>}
        {movie?.overview && <P>{movie?.overview}</P>}
        {movie?.vote_average && <P>Stars: {parseFloat(movie?.vote_average).toFixed(1)}/10</P>}
      </Div>
      {children}
    </Div>
  );
};
