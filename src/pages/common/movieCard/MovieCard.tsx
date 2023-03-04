import { Card } from "../../common";
import { useNavigate } from "react-router-dom";
import { Movie } from "../movie";

export const MovieCard = ({ movie, className, children }: any) => {
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
