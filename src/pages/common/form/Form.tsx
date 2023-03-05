import styles from "./form.module.scss";

type FormProps = {
  id?: string;
  children: React.ReactNode;
  onSubmit?: React.FormEventHandler;
  props?: any;
};

export const Form = ({ children, ...props }: FormProps): JSX.Element => {
  return (
    <form className={styles["form"]} {...props}>
      {children}
      <input className={styles["submit-input"]} type='submit' />
    </form>
  );
};

export default Form;
