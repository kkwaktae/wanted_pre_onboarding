import React, { useState } from "react";

const BasicToggle = ({ condition, setCondition, arr }) => {
  const changeToBasic = () => {
    setCondition("기본");
  };

  return (
    <li
      className={"toggle-btn basic"}
      onClick={changeToBasic}
      style={{
        color: condition === arr[0] ? "#131313" : "#999",
      }}
    >
      {arr[0]}
    </li>
  );
};

const DetailToggle = ({ condition, setCondition, arr }) => {
  const changeToDetail = () => {
    setCondition("상세");
  };

  return (
    <li
      className={"toggle-btn detail"}
      onClick={changeToDetail}
      style={{
        color: condition === arr[1] ? "#131313" : "#999",
      }}
    >
      {arr[1]}
    </li>
  );
};

const MoveTool = ({ arr, condition }) => {
  return (
    <li
      className={"mover"}
      style={{
        left: condition === arr[0] ? "2%" : "calc(100% - 52%)",
      }}
    ></li>
  );
};

const ToggleContent = () => {
  const [condition, setCondition] = useState("기본");

  const arr = ["기본", "상세"];

  return (
    <div className={"main-container"}>
      <ul className={"toggle-box"}>
        <BasicToggle
          arr={arr}
          condition={condition}
          setCondition={setCondition}
        ></BasicToggle>
        <DetailToggle
          arr={arr}
          condition={condition}
          setCondition={setCondition}
        ></DetailToggle>
        <MoveTool arr={arr} condition={condition}></MoveTool>
      </ul>
    </div>
  );
};

export default ToggleContent;
