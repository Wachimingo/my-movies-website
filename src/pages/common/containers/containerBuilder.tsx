//@ts-ignore
import { jsx } from "react/jsx-runtime";
//@ts-ignore
import styles from "./container.module.scss";
import { ContainerProps } from "./types";

const COLUMN = "column";

const containerBuilder = (
  HtmlElement: string,
  { children, column, row, className, space, fit, onClick, role }: ContainerProps,
  extendedClass?: string
): JSX.Element => {
  let direction: string = COLUMN;
  if (column) direction = COLUMN;
  if (row) direction = "row";
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
