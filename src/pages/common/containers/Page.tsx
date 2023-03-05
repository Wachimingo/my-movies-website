import { ContainerProps } from "./types";
import containerBuilder from "./containerBuilder";
import styles from "./container.module.scss";

const Page = (props: ContainerProps): JSX.Element => containerBuilder("div", props, styles["page"]);

export default Page;
