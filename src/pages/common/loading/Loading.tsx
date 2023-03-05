import Lottie from "lottie-react";
import movieAnimation from "../../../assets/animations/movie-animation.json";
import { Center } from "../containers";

export const Loading = () => {
  return (
    <Center>
      <Lottie animationData={movieAnimation} />
    </Center>
  );
};
