import React from "react";
import { Button } from "../index";

export interface Props {
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
  onClick?: () => void;
}

export const Default: React.FC<Props> = () => {
  return <Button type="default">type</Button>;
};

export const Primary: React.FC<Props> = () => {
  return <Button type="primary">type</Button>;
};

export const Info: React.FC<Props> = () => {
  return <Button type="info">type</Button>;
};

export const Success: React.FC<Props> = () => {
  return <Button type="success">type</Button>;
};

export const Warning: React.FC<Props> = () => {
  return <Button type="warning">type</Button>;
};

export const Danger: React.FC<Props> = () => {
  return <Button type="danger">type</Button>;
};

export const Inverse: React.FC<Props> = () => {
  return <Button type="inverse">type</Button>;
};

export const Normal: React.FC<Props> = () => {
  return (
    <Button type="default" size="normal">
      size
    </Button>
  );
};

export const Large: React.FC<Props> = () => {
  return (
    <Button type="default" size="large">
      size
    </Button>
  );
};

export default {
  title: "Components/Button",
};
