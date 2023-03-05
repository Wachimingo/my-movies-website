import { useNavigate } from "react-router-dom";
import { Card } from "../card";
import { Movie } from "../movie";
import { MovieType } from "../types";

type MovieCardProps = {
  movie: MovieType;
  className?: string;
  children?: React.ReactNode;
};

export const MovieCard = ({ movie, className, children }: MovieCardProps) => {
  const navigate = useNavigate();

  const openMovieDetails = (id: string) => {
    navigate(`/details/${id}`);
  };

  return (
    <Card onClick={() => openMovieDetails(movie.id)} className={className}>
      {children}
      <Movie movie={movie} />
    </Card>
  );
};

export default MovieCard;
