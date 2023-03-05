import { Main, Page } from "../common";
import styles from "./notFound.module.scss";
export const NotFound = () => {
  return (
    <Page>
      <Main>
        <h1 className={styles["text"]}>404 Not Found</h1>
      </Main>
    </Page>
  );
};

export default NotFound;
