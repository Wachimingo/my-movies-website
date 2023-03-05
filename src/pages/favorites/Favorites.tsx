import { useEffect, useState } from "react";
import { Main, MovieCard, Page, Section } from "../common";
import type { MovieType } from "../common/types";

export const Favorites = () => {
  const [movies, setMovies] = useState<MovieType[]>();

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
        {movies?.map((movie: MovieType) => {
          return <MovieCard key={movie.title} movie={movie} />;
        })}
      </Section>
    </Page>
  );
};

export default Favorites;
