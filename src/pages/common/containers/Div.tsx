import { ContainerProps } from "./types";
import containerBuilder from "./containerBuilder";

const Div = (props: ContainerProps): JSX.Element => containerBuilder("div", props, undefined);

export default Div;
