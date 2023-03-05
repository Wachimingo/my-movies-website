import { Div } from "../containers";
import styles from "./form.module.scss";

type InputProps = {
  id?: string;
  type?: string;
  fieldName?: string;
  action: Function;
  value?: string;
  required?: boolean;
  min?: string;
  props?: any;
};

export const Input = ({ id, fieldName, action, value, ...props }: InputProps): JSX.Element => {
  return (
    <Div column>
      <label htmlFor={id}>{fieldName}</label>
      <input className={styles["form-input"]} id={id} onChange={(e) => action(e.target.value)} {...props} />
    </Div>
  );
};

export default Input;
