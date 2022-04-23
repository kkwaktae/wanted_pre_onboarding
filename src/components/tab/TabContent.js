import React from "react";
import { useState } from "react";

const TabList = ({ arr, tab, setTab }) => {
  const tabList = arr.map((item) => (
    <li
      className={`tap-item${item.id}`}
      key={item.id}
      onClick={(e) => {
        e.preventDefault();
        setTab(item.name);
      }}
      style={{ color: tab === item.name ? "#333" : null }}
    >
      <h3>{item.name}</h3>
    </li>
  ));

  return tabList;
};

const MoveTool = ({ arr, tab }) => {
  let move = null;

  if (tab === arr[0].name) {
    move = { left: "0" };
  } else if (tab === arr[1].name) {
    move = { left: "33.333%" };
  } else {
    move = { left: "66.666%" };
  }

  return (
    <div>
      <div className={"parent-line"}></div>
      <div className={"child-line"} style={move}></div>
    </div>
  );
};

const TabContent = () => {
  const arr = [
    { id: 1, name: "감자" },
    { id: 2, name: "고구마" },
    { id: 3, name: "카레라이스" },
  ];
  const [tab, setTab] = useState(arr[0].name);

  return (
    <div className={"main-container"}>
      <ul className={"tab-box"}>
        <TabList arr={arr} tab={tab} setTab={setTab} />
        <MoveTool arr={arr} tab={tab} />
      </ul>
    </div>
  );
};

export default TabContent;
