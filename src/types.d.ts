export type UIButtonProps = {
  title: string;
  action: string;
  icon: string;
};

export interface CommonButtonProps extends UIButtonProps {
  onClick: (ev: MouseEvent) => void;
}
