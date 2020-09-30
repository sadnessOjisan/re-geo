import React from "react";
import { Story, Meta } from "../../../node_modules/@storybook/react/types-6-0";
import { Button } from "../button/Button";
import { ButtonGroup as _ButtonGroup } from "../index";

export interface Props {
  className?: string;
}

const Template: Story<Props> = (args: Props) => (
  <_ButtonGroup {...args}>
    <Button type="default">default</Button>
    <Button type="primary">primary</Button>
    <Button type="info">info</Button>
    <Button type="success">success</Button>
    <Button type="warning">warning</Button>
    <Button type="danger">danger</Button>
    <Button type="inverse">inverse</Button>
  </_ButtonGroup>
);

export const ButtonGroup = Template.bind({});

export default {
  title: "Components/ButtonGroup",
  component: _ButtonGroup,
} as Meta;
