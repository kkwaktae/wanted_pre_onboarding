import React from "react";
import "../../styles/toggle.css";
import ToggleHeader from "./ToggleHeader";
import ToggleContent from "./ToggleContent";

const Toggle = () => {
  return (
    <div className={"wrapper"}>
      <ToggleHeader></ToggleHeader>
      <ToggleContent></ToggleContent>
    </div>
  );
};

export default Toggle;
