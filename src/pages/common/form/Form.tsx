import React from "react";
import { FORM, SUBMIT, SUBMIT_INPUT } from "./constants";
//@ts-ignore
import styles from "./form.module.scss";

export const Form = ({ children, ...props }: any) => {
  return (
    <form className={styles[FORM]} {...props}>
      {children}
      <input className={styles[SUBMIT_INPUT]} type={SUBMIT} />
    </form>
  );
};
