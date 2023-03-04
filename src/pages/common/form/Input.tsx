import React from "react";
import { Div } from "../containers";
import styles from "./form.module.scss";
export const Input = ({ type, id, fieldName, action, value }: any): JSX.Element => {
  return (
    <Div column>
      <label htmlFor={id}>{fieldName}</label>
      <input className={styles["form-input"]} id={id} type={type} onChange={(e) => action(e.target.value)} value={value} />
    </Div>
  );
};
