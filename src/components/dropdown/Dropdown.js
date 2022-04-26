import React from "react";
import "../../styles/dropdown.css";
import DropdownHeader from "./DropdownHeader";
import DropdownContent from "./DropdownContent";

// 전역에 option 배열을 변수에 할당
const initOptionList = [
  "All Symbols",
  "BTCUSD.PERP",
  "ETHUSD.PERP",
  "BCHUSD.PERP",
  "LTCUSD.PERP",
];

/**
 *  Dropdown 컴포넌트
 *  전역에 할당한 initOptionList를 DropdownContent에 전달
 * @returns
 */
const Dropdown = () => {
  return (
    <div className={"wrapper"}>
      <DropdownHeader />
      <DropdownContent optionList={initOptionList} />
    </div>
  );
};

export default Dropdown;
