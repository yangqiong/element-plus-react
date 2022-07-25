import React from "react";

interface InputProps {
  placeholder?: string;
}

export const Input = ({ placeholder }: InputProps) => {
  return (
    <div className="el-input">
      <div className="el-input__wrapper">
        <input className="el-input__inner" placeholder={placeholder} />
      </div>
    </div>
  );
};
