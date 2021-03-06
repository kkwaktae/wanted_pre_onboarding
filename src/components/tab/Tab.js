import React from "react";
import "../../styles/tab.css";
import TabHeader from "./TabHeader";
import TabContent from "./TabContent";

const Tab = () => {
  return (
    <div className={"wrapper"}>
      <TabHeader></TabHeader>
      <TabContent></TabContent>
    </div>
  );
};

export default Tab;
