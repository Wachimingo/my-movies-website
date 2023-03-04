import { useEffect, useState } from "react";
import { Main, Page, Section } from "../common";
import { MovieCard } from "../common/movieCard";
import { baseUrl, type, apiKey } from "../constants";

export const Home = () => {
  const [movies, setMovies] = useState<any>();

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
      <Section row>
        {movies?.map((movie: any) => {
          return <MovieCard key={movie.title} movie={movie} />;
        })}
      </Section>
    </Page>
  );
};
