export type ButtonMeta = {
  title: string;
  action: string;
  value?: string;
  icon?: string;
  onClick?: (ev: MouseEvent) => void;
};
