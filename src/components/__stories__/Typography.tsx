import React from "react";
import { Meta } from "../../../node_modules/@storybook/react/types-6-0";
import {
  H1 as _H1,
  H2 as _H2,
  H3 as _H3,
  H4 as _H4,
  H5 as _H5,
  H6 as _H6,
  P as _P,
} from "../index";

export const H1: React.FC = () => {
  return <_H1>this is H1</_H1>;
};

export const H2: React.FC = () => {
  return <_H2>this is H2</_H2>;
};

export const H3: React.FC = () => {
  return <_H3>this is H3</_H3>;
};

export const H4: React.FC = () => {
  return <_H4>this is H4</_H4>;
};

export const H5: React.FC = () => {
  return <_H5>this is H5</_H5>;
};

export const H6: React.FC = () => {
  return <_H6>this is H6</_H6>;
};

export const P: React.FC = () => {
  return <_P>this is P</_P>;
};

export default {
  title: "Components/Typography",
  component: H1,
} as Meta;
