import "./App.css";
import { useState } from "react";
import Toggle from "./components/toggle/Toggle";
import Tab from "./components/tab/Tab";
import Slide from "./components/slide/Slide";
import Input from "./components/input/Input";
import Dropdown from "./components/dropdown/Dropdown";

function App() {
  const [comp, setComp] = useState(Toggle);

  return (
    <div className="App">
      <nav>
        <ul className="nav-bar">
          <li className="nav-name" onClick={() => setComp(Toggle)}>
            Toggle
          </li>
          <li className="nav-name" onClick={() => setComp(Tab)}>
            Tab
          </li>
          <li className="nav-name" onClick={() => setComp(Slide)}>
            Slide
          </li>
          <li className="nav-name" onClick={() => setComp(Input)}>
            Input
          </li>
          <li className="nav-name" onClick={() => setComp(Dropdown)}>
            Dropdown
          </li>
        </ul>
      </nav>
      <main children={comp}></main>
    </div>
  );
}

export default App;
