import { ContainerProps } from "./types";
import containerBuilder from "./containerBuilder";
import styles from "./container.module.scss";

const Center = (props: ContainerProps): JSX.Element => containerBuilder("div", props, styles["center"]);

export default Center;
