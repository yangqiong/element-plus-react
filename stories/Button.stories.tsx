import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../packages/components/button";

export default {
  title: "Basic/Button",
  component: Button,
  args: {
    type: "default",
    plain: false,
    round: false,
    circle: false,
    label: "Default",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "default",
  plain: false,
  round: false,
  circle: false,
  label: "Default",
};
