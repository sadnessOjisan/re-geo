import React from "react";
import { Story, Meta } from "../../../node_modules/@storybook/react/types-6-0";
import { Alerts as _Alerts } from "../index";

export interface Props {
  onClose?: any;
  type: "alert" | "error" | "success" | "info";
}

const Template: Story<Props> = (args: Props) => <_Alerts {...args} />;

export const Alert = Template.bind({});
Alert.args = {
  type: "alert",
};

export const Error = Template.bind({});
Error.args = {
  type: "error",
};

export const Success = Template.bind({});
Success.args = {
  type: "success",
};

export const Info = Template.bind({});
Info.args = {
  type: "info",
};

export default {
  title: "Components/Alerts",
  component: _Alerts,
} as Meta;
