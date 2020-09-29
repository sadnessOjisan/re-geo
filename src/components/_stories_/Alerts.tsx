import React from "react";
import { Alerts } from "../index";

export interface Props {
  type: string;
}

export const AlertC: React.FC<Props> = () => {
  return <Alerts type="alert">test</Alerts>;
};

export const ErrorC: React.FC<Props> = () => {
  return <Alerts type="error">test</Alerts>;
};

export const SuccessC: React.FC<Props> = () => {
  return <Alerts type="success">test</Alerts>;
};

export const InfoC: React.FC<Props> = () => {
  return <Alerts type="info">test</Alerts>;
};

export default {
  title: "Components/Alerts",
};
