import { Div } from "../containers";
import styles from "./card.module.scss";

export const Card = ({ children, onClick, className }: any) => {
  return (
    <Div className={`${styles["card"]} ${className}`} column onClick={onClick}>
      <Div className={styles["card-container"]}>{children}</Div>
    </Div>
  );
};
