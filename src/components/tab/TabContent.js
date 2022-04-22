import React from "react";
import { useState } from "react";
import { useRef } from "react";

const TabContent = () => {
  const arr = [
    { id: 1, name: "감자" },
    { id: 2, name: "고구마" },
    { id: 3, name: "카레라이스" },
  ];
  const [tab, setTab] = useState(arr[0].name);

  const bar = useRef();

  const tabList = arr.map((item) => (
    <li
      className={`tap-item${item.id}`}
      key={item.id}
      onClick={(e) => {
        e.preventDefault();
        setTab(item.name);

        if (item.name === arr[0].name) {
          bar.current.style.left = "0";
        } else if (item.name === arr[1].name) {
          bar.current.style.left = "33.333%";
        } else {
          bar.current.style.left = "66.666%";
        }
      }}
      style={{ color: tab === item.name ? "#333" : null }}
    >
      <h3>{item.name}</h3>
    </li>
  ));

  return (
    <div className={"main-container"}>
      <ul className={"tab-box"}>
        {tabList}
        <div className={"parent-line"}></div>
        <div className={"child-line"} ref={bar}></div>
      </ul>
    </div>
  );
};

export default TabContent;
