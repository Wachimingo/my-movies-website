import { useEffect, useState } from "react";
import { Star, Div, Main, Movie, MovieCard, Page, Section, Loading } from "../common";
import { baseUrl, apiKey } from "../constants";
import { useParams } from "react-router-dom";
import styles from "./details.module.scss";

export const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(undefined);
  const [actors, setActors] = useState<any>(undefined);
  const [isMarked, setIsMarked] = useState<any>(false);
  const [recommendations, setRecommendations] = useState<any>(undefined);

  useEffect(() => {
    fetch(`${baseUrl}/movie/${id}?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setIsMarked(localStorage.getItem(`movie-${data.id}`) === null);
      });
    fetch(`${baseUrl}/movie/${id}/credits?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setActors(data.cast));
    fetch(`${baseUrl}/movie/${id}/recommendations?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setRecommendations(data.results));
  }, [id]);

  const setAsFavorite = (movie: any) => {
    if (isMarked) {
      const newMovie = {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        overview: movie.overview,
        vote_average: movie.vote_average
      };
      localStorage.setItem(`movie-${movie.id}`, JSON.stringify(newMovie));
      location.reload();
    } else {
      localStorage.removeItem(`movie-${movie.id}`);
      location.reload();
    }
  };

  return (
    <Page>
      <Main>
        {movie ? (
          <Movie movie={movie}>
            <Div row className={`${styles["favorite-btn"]} ${styles[isMarked ? "" : "marked"]}`} role='button' onClick={() => setAsFavorite(movie)}>
              <Star color={isMarked ? "yellow" : "black"} /> {isMarked ? "Mark as favorite" : "Remove from favorites"}
            </Div>
          </Movie>
        ) : (
          <Loading />
        )}
      </Main>
      <Section>
        <h2>Cast</h2>
        {actors ? (
          <Div row>
            {actors?.map((actor: any) => {
              return (
                <div key={actor.name} className={styles["pill"]}>
                  {actor.name}
                </div>
              );
            })}
          </Div>
        ) : (
          <Loading />
        )}
      </Section>
      <Section>
        <h2>Recommendations:</h2>
        {recommendations ? (
          <Div row>
            {recommendations?.map(({ id, title, poster_path }: any) => {
              return <MovieCard key={title + id} className={styles["recommendations"]} movie={{ id, title, poster_path }} />;
            })}
          </Div>
        ) : (
          <Loading />
        )}
      </Section>
    </Page>
  );
};

export default Details;
