import { Story } from "@storybook/react";

import {
  Americanflag,
  Community,
  Computer,
  Computer01,
  Counter,
  Counter2,
  Divider,
  Divider1,
  Divider2,
  Divider3,
  SevenUpspot,
} from ".";

export default {
  title: "Image",
  component: <></>,
};

const Template: Story = (props) => <img src={props.href}></img>;

export const SevenUpspotImage = Template.bind({});
SevenUpspotImage.args = { href: SevenUpspot };

export const AmericanflagImage = Template.bind({});
AmericanflagImage.args = { href: Americanflag };

export const CommunityImage = Template.bind({});
CommunityImage.args = { href: Community };

export const ComputerImage = Template.bind({});
ComputerImage.args = { href: Computer };

export const Computer01Image = Template.bind({});
Computer01Image.args = { href: Computer01 };

export const CounterImage = Template.bind({});
CounterImage.args = { href: Counter };

export const Counter2Image = Template.bind({});
Counter2Image.args = { href: Counter2 };

export const DividerImage = Template.bind({});
DividerImage.args = { href: Divider };

export const Divider1Image = Template.bind({});
Divider1Image.args = { href: Divider1 };

export const Divider2Image = Template.bind({});
Divider2Image.args = { href: Divider2 };

export const Divider3Image = Template.bind({});
Divider3Image.args = { href: Divider3 };
