import React from "react";
import "../../styles/input.css";
import InputHeader from "./InputHeader";
import InputContent from "./InputContent";

const Input = () => {
  return (
    <div className={"wrapper"}>
      <InputHeader />
      <InputContent />
    </div>
  );
};

export default Input;
