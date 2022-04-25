import "./App.css";
import { useState } from "react";
import Toggle from "./components/toggle/Toggle";
import Tab from "./components/tab/Tab";
import Slider from "./components/slider/Slider";
import Input from "./components/input/Input";
import Dropdown from "./components/dropdown/Dropdown";

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
