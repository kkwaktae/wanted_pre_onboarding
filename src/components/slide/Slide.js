import React from "react";
import SlideHeader from "./SlideHeader";
import SlideContent from "./SlideContent";

const Slide = () => {
  return (
    <div className={"wrapper"}>
      <SlideHeader></SlideHeader>
      <SlideContent></SlideContent>
    </div>
  );
};

export default Slide;
