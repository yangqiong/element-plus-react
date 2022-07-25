import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "../packages/components/input";

export default {
  title: "Form/Input",
  component: Input,
  args: {
    placeholder: "Please input",
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Please input",
};
