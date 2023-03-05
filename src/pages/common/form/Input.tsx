import React from "react";
import { Div } from "../containers";
import styles from "./form.module.scss";
export const Input = ({ id, fieldName, action, value, ...props }: any): JSX.Element => {
  return (
    <Div column>
      <label htmlFor={id}>{fieldName}</label>
      <input className={styles["form-input"]} id={id} onChange={(e) => action(e.target.value)} {...props} />
    </Div>
  );
};
