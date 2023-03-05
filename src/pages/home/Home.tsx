import { useEffect, useState } from "react";
import { Main, Page, Section } from "../common";
import { MovieCard } from "../common/movieCard";
import { baseUrl, type, apiKey } from "../constants";
import { Loading } from "../common/loading";
import type { MovieType } from "../common/types";

export const Home = () => {
  const [movies, setMovies] = useState<any>(undefined);

  useEffect(() => {
    fetch(`${baseUrl}/movie/${type}?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <Page>
      <Main>
        <h1>Home</h1>
      </Main>
      {movies ? (
        <Section row>
          {movies?.map((movie: MovieType) => {
            return <MovieCard key={movie.title} movie={movie} />;
          })}
        </Section>
      ) : (
        <Loading />
      )}
    </Page>
  );
};

export default Home;
