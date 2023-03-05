//@ts-nocheck
export type ContainerProps = {
  children?: React.ReactNode;
  column?: boolean;
  row?: boolean;
  space?: string;
  fit?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  role?: string;
};
