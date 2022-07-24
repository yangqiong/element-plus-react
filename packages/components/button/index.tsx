import React from "react";
import "./button.css";

interface ButtonProps {
  type?: "primary" | "success" | "warning" | "danger" | "info";
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
  return (
    <button type="button" className="el-button el-button--primary" {...props}>
      <span>{label}</span>
    </button>
  );
};
