import styles from "./p.module.scss";

type pProps = {
  children: React.ReactNode;
};

export const P = ({ children }: pProps) => {
  return <p className={styles["p"]}>{children}</p>;
};

export default P;
