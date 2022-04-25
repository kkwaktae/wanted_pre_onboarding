import React from "react";
import { useState } from "react";

const LivePercentage = ({ per }) => {
  const val = per;
  return (
    <div className={"live-percentage"}>
      <h3 className={"calc"}>{val}</h3>
      <h3 className={"per"}>%</h3>
    </div>
  );
};

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

  const list = listArr.map((item) => (
    <li
      key={item.id}
      className={item.title}
      style={{ backgroundColor: per >= item.percentage ? "#00bfa5" : null }}
    ></li>
  ));

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
        value={per}
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

const SliderContent = () => {
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
