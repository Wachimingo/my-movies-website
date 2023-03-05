import { Div } from "../containers";
import styles from "./card.module.scss";

type CardProps = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLElement>;
  className?: string;
};

export const Card = ({ children, onClick, className }: CardProps) => {
  return (
    <Div className={`${styles["card"]} ${className}`} column onClick={onClick}>
      <Div className={styles["card-container"]}>{children}</Div>
    </Div>
  );
};

export default Card;
