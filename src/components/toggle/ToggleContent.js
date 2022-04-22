import React, { useState } from "react";

const ToggleContent = () => {
  const [condition, setCondition] = useState("기본");

  const arr = ["기본", "상세"];

  const changeToBasic = () => {
    setCondition("기본");
  };
  const changeToDetail = () => {
    setCondition("상세");
  };

  return (
    <div className="main-container">
      <ul className="toggle-box">
        <li
          className="toggle-btn basic"
          onClick={changeToBasic}
          style={{
            color: condition === arr[0] ? "#131313" : "#999",
          }}
        >
          {arr[0]}
        </li>
        <li
          className="toggle-btn detail"
          onClick={changeToDetail}
          style={{
            color: condition === arr[1] ? "#131313" : "#999",
          }}
        >
          {arr[1]}
        </li>
        <li
          className="mover"
          style={{
            left: condition === arr[0] ? "2%" : "calc(100% - 52%)",
          }}
        ></li>
      </ul>
    </div>
  );
};

export default ToggleContent;
