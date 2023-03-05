//@ts-ignore
import { jsx } from "react/jsx-runtime";
import { COLUMN, DIV, MAIN, ROW, SECTION } from "./constants";
//@ts-ignore
import styles from "./container.module.scss";
import { ContainerProps } from "./types";

const containerBuilder = (
  HtmlElement: string,
  { children, column, row, className, space, fit, onClick, role }: ContainerProps,
  extendedClass?: string
): JSX.Element => {
  let direction: string = COLUMN;
  if (column) direction = COLUMN;
  if (row) direction = ROW;
  let width = "full-width";
  if (fit) width = "fit";

  return jsx(HtmlElement, {
    children,
    className: `${styles.container} ${styles[direction]} ${styles[space ?? "around"]} ${styles[width]} ${className ? " " + className : ""}${
      extendedClass ? " " + extendedClass : ""
    }`,
    onClick,
    role
  });
};

export default containerBuilder;
