import React from "react";
import { Story, Meta } from "../../../node_modules/@storybook/react/types-6-0";
import { Table as _Table } from "../index";
export interface Props {
  headers: React.ReactNode[];
  rows: React.ReactNode[][];
}

const Template: Story<Props> = (args: Props) => (
  <_Table {...args}>THIS IS Table COMPONENT.</_Table>
);

export const Default = Template.bind({});
Default.args = {
  headers: [
    <div key="1">head1</div>,
    <div key="2">head2</div>,
    <div key="3">head3</div>,
  ],
  rows: [
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
  ],
};

export default {
  title: "Components/Table",
  component: _Table,
} as Meta;
