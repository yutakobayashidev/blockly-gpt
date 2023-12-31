import { ReactNode } from "react";

export type BlocklyComponentProps = {
  initialXml?: string;
  children?: ReactNode;
  readOnly?: boolean;
  trashcan?: boolean;
  media?: string;
  move?: {
    scrollbars?: boolean;
    drag?: boolean;
    wheel?: boolean;
  };
};

export type Message = {
  role: "user" | "bot" | "error";
  text: string;
  type?: "insight" | "build" | "patch";
  image?: string;
  xml?: string;
};
