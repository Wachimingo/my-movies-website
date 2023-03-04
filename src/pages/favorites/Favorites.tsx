import { useEffect, useState } from "react";
import { Main, MovieCard, Page, Section } from "../common";
import styles from "./favorites.module.scss";

export const Favorites = () => {
  const [movies, setMovies] = useState<any>();

  useEffect(() => {
    let favoriteMovies = [];
    for (const key in localStorage) {
      if (key.includes("movie")) {
        favoriteMovies.push(JSON.parse(localStorage.getItem(key)!));
      }
    }
    setMovies(favoriteMovies);
  }, []);
  return (
    <Page>
      <Main>
        <h1>Favorites</h1>
      </Main>
      <Section row>
        {movies?.map((movie: any) => {
          return <MovieCard key={movie.title} movie={movie} />;
        })}
      </Section>
    </Page>
  );
};
