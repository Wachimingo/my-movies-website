export type ButtonProps = {
  children: React.ReactNode;
  success?: boolean;
  info?: boolean;
  error?: boolean;
  warning?: boolean;
  disable?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
};
