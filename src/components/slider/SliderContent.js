import React from "react";
import { useState } from "react";

/** LivePercentage 컴포넌트
 *  per state를 props로 전달받고 해당 값을 화면에 보여줍니다.
 * @param {Object} {per}
 * @returns
 */
const LivePercentage = ({ per }) => {
  const val = per;
  return (
    <div className={"live-percentage"}>
      <h3 className={"calc"}>{val}</h3>
      <h3 className={"per"}>%</h3>
    </div>
  );
};

/** ToolBox 컴포넌트
 *  1%, 25%, 50%, 75%, 100% 지점에 point UI를 만듭니다.
 *  per state를 props로 전달받아 상태 변화를 감지합니다.
 *  per 수치가 각 %지점을 지날 때 point UI의 색깔을 변경합니다.
 * @param {Object} {per, setPer}
 * @returns
 */
const ToolBox = ({ per, setPer }) => {
  const listArr = [
    {
      id: 1,
      title: "point1 po",
      percentage: 1,
    },
    {
      id: 2,
      title: "point2 po",
      percentage: 25,
    },
    {
      id: 3,
      title: "point3 po",
      percentage: 50,
    },
    {
      id: 4,
      title: "point4 po",
      percentage: 75,
    },
    {
      id: 5,
      title: "point5 po",
      percentage: 100,
    },
  ];

  // 1% 25% 50% 75% 100% 지점에 원 UI 생성
  const list = listArr.map((item) => (
    <li
      key={item.id}
      className={item.title}
      style={{ backgroundColor: per >= item.percentage ? "#00bfa5" : null }}
    ></li>
  ));

  // Input value 값(1~100까지의 수치)를 val변수에 할당
  const dragPointer = (e) => {
    const val = e.target.value;
    setPer(val);
  };

  return (
    <ul className={"tool-box"}>
      <input
        type="range"
        className={"bar-input"}
        min="1"
        max="100"
        defaultValue={per}
        onInput={dragPointer}
      />
      <li className={"bar-line base"}></li>
      <li
        className={"bar-line gage"}
        style={{ width: per > 0 ? `${per}%` : null }}
      ></li>
      {list}
    </ul>
  );
};

/** PercentageBtn
 *  1% 25% 50% 75% 100%를 나타내는 버튼 UI를 만듭니다.
 *  각 UI 클릭 시 해당하는 class명과 percent 값을 per state에 반영하여 상태를 변경합니다.
 * @param {Object} {setPer}
 * @returns
 */
const PercentageBtn = ({ setPer }) => {
  const arr = [
    {
      id: 1,
      name: "per-1 btn",
      percent: "1",
    },
    {
      id: 2,
      name: "per-25 btn",
      percent: "25",
    },
    {
      id: 3,
      name: "per-50 btn",
      percent: "50",
    },
    { id: 4, name: "per-75 btn", percent: "75" },
    { id: 5, name: "per-100 btn", percent: "100" },
  ];

  const btn = arr.map((item) => (
    <li
      key={item.id}
      className={item.name}
      onClick={(e) => {
        e.preventDefault();
        setPer(item.percent);
      }}
    >
      <p>{item.percent}%</p>
    </li>
  ));

  return <ul className={"percentage-box"}>{btn}</ul>;
};

/** SliderContent 컴포넌트
 *  슬라이더 기능의 메인 컴포넌트
 *  per를 변수로 활용하여 상태를 설정하고
 *  각 컴포넌트에 props를 전달하여 상태를 관리합니다.
 * @param
 * @returns
 */
const SliderContent = () => {
  // 초기값 50으로 설정
  const [per, setPer] = useState(50);

  return (
    <div className={"slider-container"}>
      <LivePercentage per={per} />
      <ToolBox per={per} setPer={setPer} />
      <PercentageBtn setPer={setPer} />
    </div>
  );
};

export default SliderContent;
