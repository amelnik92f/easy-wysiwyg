import { FORMAT_EVENT } from "./core";
import { UsualEvent } from "./utils";

export type CommonButtonProps = {
  title: string;
  action: string;
  icon: string;
};

export interface FormatButtonMeta extends CommonButtonProps {
  event: FORMAT_EVENT;
}

export type FormatEvent = {
  [key in FORMAT_EVENT]: FormatEventHandler;
};

export type FormatEventHandler = (data: UsualEvent) => void;
