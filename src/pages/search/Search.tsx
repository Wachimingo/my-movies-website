import { useEffect, useState } from "react";
import { Loading, Main, Page, Section } from "../common";
import { MovieCard } from "../common/movieCard";
import { useParams } from "react-router-dom";
import { baseUrl, apiKey } from "../constants";

export const Search = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState<any>(undefined);

  useEffect(() => {
    fetch(`${baseUrl}/search/movie?query=${query}&api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, [query]);

  return (
    <Page>
      <Main>
        <h1>Currently searching for: {query}</h1>
      </Main>
      {movies ? (
        <Section row>
          {movies?.map((movie: any) => {
            return <MovieCard key={`${movie.id}_${movie.title}`} movie={movie} />;
          })}
        </Section>
      ) : (
        <Loading />
      )}
    </Page>
  );
};

export default Search;
