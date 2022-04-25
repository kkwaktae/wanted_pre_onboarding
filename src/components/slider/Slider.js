import React from "react";
import "../../styles/slider.css";

import SliderHeader from "./SliderHeader";
import SliderContent from "./SliderContent";

const Slide = () => {
  return (
    <div className={"wrapper"}>
      <SliderHeader></SliderHeader>
      <SliderContent></SliderContent>
    </div>
  );
};

export default Slide;
