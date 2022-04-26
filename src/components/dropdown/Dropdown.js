import React from "react";
import "../../styles/dropdown.css";
import DropdownHeader from "./DropdownHeader";
import DropdownContent from "./DropdownContent";

const initOptionList = [
  "All Symbols",
  "BTCUSD.PERP",
  "ETHUSD.PERP",
  "BCHUSD.PERP",
  "LTCUSD.PERP",
];

const Dropdown = () => {
  return (
    <div className={"wrapper"}>
      <DropdownHeader />
      <DropdownContent optionList={initOptionList} />
    </div>
  );
};

export default Dropdown;
