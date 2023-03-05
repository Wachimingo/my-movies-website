import Lottie from "lottie-react";
import movieAnimation from "../../../assets/animations/movie-animation.json";
import { Center } from "../containers";

export const Loading = (): JSX.Element => {
  return (
    <Center>
      <Lottie animationData={movieAnimation} />
    </Center>
  );
};

export default Loading;
