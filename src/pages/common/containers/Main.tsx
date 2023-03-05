import { ContainerProps } from "./types";
import containerBuilder from "./containerBuilder";

const Main = (props: ContainerProps): JSX.Element => containerBuilder("main", props, undefined);

export default Main;
