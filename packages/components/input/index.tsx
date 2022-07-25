import React from "react";
import { useNamespace } from "@element-plus-react/hooks";

interface InputProps {
  placeholder?: string;
  disabled?: boolean;
}

export const Input = ({ placeholder, disabled = false }: InputProps) => {
  const ns = useNamespace("button");

  const className = `el-input 
  ${ns.is("disabled", disabled)}`;

  return (
    <div className={className}>
      <div className="el-input__wrapper">
        <input
          className="el-input__inner"
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>
    </div>
  );
};
