import React from "react";
import { Table } from "../index";

export interface Props {
  headers: React.ReactNode[];
  rows: React.ReactNode[][];
}

export const Default: React.FC<Props> = () => {
  return (
    <Table
      headers={[
        <div key="1">head1</div>,
        <div key="2">head2</div>,
        <div key="3">head3</div>,
      ]}
      rows={[
        [
          <div key="11">row11</div>,
          <div key="12">row12</div>,
          <div key="13">row13</div>,
        ],
        [
          <div key="21">row21</div>,
          <div key="22">row22</div>,
          <div key="23">row23</div>,
        ],
        [
          <div key="31">row31</div>,
          <div key="32">row32</div>,
          <div key="33">row33</div>,
        ],
        [
          <div key="41">row41</div>,
          <div key="42">row42</div>,
          <div key="43">row43</div>,
        ],
      ]}
    ></Table>
  );
};

export default {
  title: "Components/Table",
};
