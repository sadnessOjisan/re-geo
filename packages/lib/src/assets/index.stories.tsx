import { Story } from "@storybook/react";
import { Americanflag, Community, Computer, SevenUpspot } from ".";

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
