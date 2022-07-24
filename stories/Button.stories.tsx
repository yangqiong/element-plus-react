import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../packages/components/button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button/Button",
  component: Button,
  args: {
    type: "default",
    plain: false,
    round: false,
    label: "Default",
  },
} as ComponentMeta<typeof Button>;

// // // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "default",
  plain: false,
  round: false,
  label: "Default",
};
