import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Button } from "../packages/components/button";

export const ButtonBase = (args) => {
  const types = [
    { ...args, label: "Default", type: "Default" },
    { ...args, label: "Primary", type: "primary" },
    { ...args, label: "Success", type: "success" },
    { ...args, label: "Info", type: "info" },
    { ...args, label: "Warning", type: "warning" },
    { ...args, label: "Danger", type: "danger" },
    { ...args, label: "中文" },
  ];

  const plains = types.map((type) => ({ ...type, plain: true }));
  const rounds = types.map((type) => ({ ...type, round: true }));
  const circles = types.map((type) => ({ ...type, circle: true, label: "00" }));

  return (
    <div>
      <div>
        {types.map((args) => (
          <Button key={args.label} {...args}></Button>
        ))}
      </div>
      <p></p>
      <div>
        {plains.map((args) => (
          <Button key={args.label} {...args}></Button>
        ))}
      </div>
      <p></p>
      <div>
        {rounds.map((args) => (
          <Button key={args.label} {...args}></Button>
        ))}
      </div>
      <p></p>
      <div>
        {circles.map((args) => (
          <Button key={args.label} {...args}></Button>
        ))}
      </div>
    </div>
  );
};

export default {
  title: "Basic/Button/ButtonBase",
  component: ButtonBase,
} as ComponentMeta<typeof ButtonBase>;
