import { FORMAT_EVENT } from "./core";
import { UsualEvent } from "./utils";

export type UIButtonProps = {
  title: string;
  action: string;
  icon: string;
};

export interface CommonButtonProps extends UIButtonProps {
  onClick: (ev: MouseEvent) => void;
}

export type FormatEvent = {
  [key in FORMAT_EVENT]: FormatEventHandler;
};

export type FormatEventHandler<T = undefined> = (data: UsualEvent<T>) => void;
