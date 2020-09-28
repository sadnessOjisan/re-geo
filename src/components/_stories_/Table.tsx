import React from "react";
import { Table } from "../index";

export interface Props {
  headers: React.ReactNode[];
  rows: React.ReactNode[][];
}

export const Default: React.FC<Props> = () => {
  return (
    <Table
      headers={[<div>head1</div>, <div>head2</div>, <div>head3</div>]}
      rows={[
        [<div>row11</div>, <div>row12</div>, <div>row13</div>],
        [<div>row21</div>, <div>row22</div>, <div>row23</div>],
        [<div>row31</div>, <div>row32</div>, <div>row33</div>],
        [<div>row41</div>, <div>row42</div>, <div>row43</div>],
      ]}
    ></Table>
  );
};

export default {
  title: "Components/Table",
};
