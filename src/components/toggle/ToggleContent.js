import React, { useState } from "react";

/** BasicToggle 컴포넌트
 *  "기본"에 해당하는 UI 컴포넌트입니다.
 *  해당 UI 클릭 시 condition 의 상태를 변경하여 style을 제어합니다.
 *
 * @param {Object} {condition, setCondition, arr}
 * @returns
 */
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

/** DetailToggle 컴포넌트
 *  "상세"에 해당하는 UI 컴포넌트입니다.
 *  해당 UI 클릭 시 condition 의 상태를 변경하여 style을 제어합니다.
 *
 * @param {Object} {condition, setCondition, arr}
 * @returns
 */
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

/** MoveTool 컴포넌트
 *  condition 상태에 따라 스타일을 변경하여 Ui를 좌, 우로 움직입니다
 * @param {Object} { arr, condition }
 * @returns
 */
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

/** ToggleContent 컴포넌트
 *  토글 기능의 메인 컴포넌트
 *  condition을 변수로 활용하여 상태를 설정하고
 *  각 컴포넌트에 props를 전달하여 상태를 관리합니다.
 * @param
 * @returns
 */
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
