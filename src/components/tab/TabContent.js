import React from "react";
import { useState } from "react";

/** TabList 컴포넌트
 *  탭의 text box UI입니다.
 *  각 탭을 클릭할 때 tab state 값을 변경합니다.
 * @param {Object} { arr, tab, setTab }
 * @returns
 */
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

/** MoveTool 컴포넌트
 *  각 탭의 하단에 위치한 bar 모양의 UI입니다.
 *  tab state가 변화함에 따라 move 변수에 각기 다른 style을 어합니다.
 * @param {Object} { arr, tab }
 * @returns
 */
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

/** TabContent 컴포넌트
 *  탭 기능 메인 컴포넌트
 *  탭 구조에 활용될 요소를 arr 배열에 담았습니다.
 *  TabList와 MoveTool로 컴포넌트를 나누고 arr와 tab state를 props로 전달합니다.
 * @param
 * @returns
 */
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
