import { ContainerProps } from "./types";
import containerBuilder from "./containerBuilder";

const Section = (props: ContainerProps): JSX.Element => containerBuilder("section", props, undefined);

export default Section;
