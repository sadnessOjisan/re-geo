import { FC } from "react";

import { Rainbow } from "../..";
import {
  BLACK,
  CYAN,
  GRAY,
  GREEN,
  RED,
  WHITE,
  YELLOW,
} from "../../const/internal/color";
import { assertNever } from "../../util/internal/assert-never";

type Props = {
  type?:
    | "default"
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "inverse";
  size?: "normal" | "large" | "small";
  isDisable?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  __unsafe__style?: React.CSSProperties;
  __unsafe__className?: string;
};

const DEFAULT_DISABLE = false;

export const Button: FC<Props> = ({
  children,
  type,
  size,
  isDisable,
  onClick,
  __unsafe__style,
  __unsafe__className,
}) => {
  let skinStyle: React.CSSProperties = {};
  switch (type) {
    case "default":
    case undefined:
      skinStyle = {
        color: GRAY,
      };
      break;
    case "primary":
      skinStyle = {
        color: WHITE,
        background: `#000 url(${Rainbow}) top left`,
      };
      break;
    case "info":
      skinStyle = {
        color: WHITE,
        backgroundColor: CYAN,
      };
      break;
    case "success":
      skinStyle = {
        color: WHITE,
        backgroundColor: GREEN,
      };
      break;
    case "warning":
      skinStyle = {
        color: BLACK,
        backgroundColor: YELLOW,
      };
      break;
    case "danger":
      skinStyle = {
        color: WHITE,
        backgroundColor: RED,
      };
      break;
    case "inverse":
      skinStyle = {
        color: WHITE,
        backgroundColor: BLACK,
      };
      break;
    default:
      assertNever(type);
  }

  let sizeStyle: React.CSSProperties = {};
  switch (size) {
    case "normal":
    case undefined:
      sizeStyle = {
        padding: "4px 12px",
        fontSize: 16,
      };
      break;
    case "small":
      sizeStyle = {
        padding: "2px 8px",
        fontSize: 12,
      };
      break;
    case "large":
      sizeStyle = {
        padding: "12px 20px",
        fontSize: 20,
      };
      break;
    default:
      assertNever(size);
  }
  return (
    <button
      disabled={isDisable === undefined ? DEFAULT_DISABLE : isDisable}
      style={{
        ...sizeStyle,
        ...skinStyle,
        ...__unsafe__style,
        border: "6px ridge #bbb",
        cursor: "pointer",
      }}
      onClick={onClick}
      className={__unsafe__className}
    >
      {children}
    </button>
  );
};
