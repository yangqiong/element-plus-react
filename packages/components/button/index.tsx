import React from "react";
import { useNamespace } from "@element-plus-react/hooks";

interface ButtonProps {
  type?: "default" | "primary" | "success" | "warning" | "danger" | "info";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ type, label, ...props }: ButtonProps) => {
  const ns = useNamespace("button");
  return (
    <button type="button" className={`el-button ${ns.m(type)}`} {...props}>
      <span>{label}</span>
    </button>
  );
};
