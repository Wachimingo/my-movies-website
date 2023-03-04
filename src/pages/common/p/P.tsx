import styles from "./p.module.scss";
export const P = ({ children }: any) => {
  return <p className={styles["p"]}>{children}</p>;
};
