import React from "react";
import { useNamespace } from "@element-plus-react/hooks";

interface ButtonProps {
  type?: "default" | "primary" | "success" | "warning" | "danger" | "info";
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
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
export const Button = ({
  type,
  plain,
  round,
  circle,
  label,
  ...props
}: ButtonProps) => {
  const ns = useNamespace("button");

  const className = `el-button 
  ${ns.m(type)} 
  ${ns.is("plain", plain)} 
  ${ns.is("round", round)}
  ${ns.is("circle", circle)}`;

  return (
    <button type="button" className={className} {...props}>
      <span>{label}</span>
    </button>
  );
};
