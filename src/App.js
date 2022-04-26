import "./App.css";
import { useState } from "react";
import Toggle from "./components/toggle/Toggle";
import Tab from "./components/tab/Tab";
import Slider from "./components/slider/Slider";
import Input from "./components/input/Input";
import Dropdown from "./components/dropdown/Dropdown";

/** Nav 컴포넌트
 *  App.js에서 5가지 기능에 대한 배열을 받아옵니다.
 *  배열을 화면 상단의 탭에 나열합니다.
 *  onClick으로 Comp state를 변경하여 탭 클릭 시 해당 기능을 보여줍니다.
 * @param {Object} {setComp, navArr}
 * @returns
 */
const Nav = ({ setComp, navArr }) => {
  const list = navArr.map((item) => (
    <li
      className="nav-name"
      key={item.id}
      onClick={() => {
        setComp(item.title);
      }}
    >
      {item.title}
    </li>
  ));

  return (
    <nav>
      <ul className="nav-bar">{list}</ul>
    </nav>
  );
};

/** Main 컴포넌트
 *  if 문을 활용하여 Nav의 onClick에 의해 comp의 상태가 변경될 경우 content 변수를 comp에 해당하는 컴포넌트 화면을 <main>에 렌더링합니다.
 * @param {Object} {comp, navArr}
 * @returns
 */
const Main = ({ comp, navArr }) => {
  let content = null;

  if (comp === navArr[0].title) content = <Toggle />;
  if (comp === navArr[1].title) content = <Tab />;
  if (comp === navArr[2].title) content = <Slider />;
  if (comp === navArr[3].title) content = <Input />;
  if (comp === navArr[4].title) content = <Dropdown />;

  return <main>{content}</main>;
};

function App() {
  const navArr = [
    { id: 1, title: "Toggle" },
    { id: 2, title: "Tab" },
    { id: 3, title: "Slider" },
    { id: 4, title: "Input" },
    { id: 5, title: "Dropdown" },
  ];

  const [comp, setComp] = useState(navArr[0].title);

  return (
    <div className="App">
      <Nav comp={comp} setComp={setComp} navArr={navArr} />
      <Main comp={comp} navArr={navArr} />
    </div>
  );
}

export default App;
