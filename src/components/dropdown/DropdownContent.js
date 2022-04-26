import React from "react";
import { useState, useRef, useEffect } from "react";

/**
 * SearchBar 컴포넌트
 *
 * @param {Object} {setSearchInputValue, showCondition}
 * @returns
 */
const SearchBar = ({ setSearchInputValue, showCondition }) => {
  const searchBarRef = useRef();

  // search bar 클릭 시 showCondition 값이 변경될 때마다 search bar에 포커싱
  useEffect(() => {
    searchBarRef.current.focus();
  }, [showCondition]);

  const getValue = (e) => {
    setSearchInputValue(e.target.value);
  };

  return (
    <div className={"search-box"}>
      <input
        className={"search-bar"}
        type={"text"}
        placeholder={"Search Symbol"}
        onChange={getValue}
        ref={searchBarRef}
      />
      <i className={"search-icon material-icons"}>search</i>
    </div>
  );
};

/**
 *  OptionList 컴포넌트
 *  옵션 리스트를 렌더링한다
 *  옵션 선택 시 해당 텍스트를 selected bar에서 보여줌
 *
 * @param {Object} {setSelectedBar, setShowCondition, showCondition, filteredList}
 * @returns
 */
const OptionList = ({
  setSelectedBar,
  setShowCondition,
  showCondition,
  filteredList,
}) => {
  // 옵션 선택 시 selected bar에서 해당 텍스트 보여주기
  const selectItem = (e) => {
    e.preventDefault();
    setSelectedBar(e.target.innerText);
    setShowCondition(!showCondition);
  };

  // 옵션 리스트 렌더링
  const option = filteredList.map((item, idx) => (
    <li key={idx} className={`option item${idx + 1}`} onClick={selectItem}>
      {item}
    </li>
  ));

  return <ul className={"category-option"}>{option}</ul>;
};

/**
 *  DropdownContent 컴포넌트
 *  드랍다운 기능의 메인 컴포넌트
 *  Dropdown.js에서 설정한 전역변수 배열(option list)를 props로 받아온다.
 * @param {Object} {optionList}
 * @returns
 */
const DropdownContent = ({ optionList }) => {
  const [showCondition, setShowCondition] = useState(false);

  // selectedBar 클릭 시 dropdown 활성화
  const showOptionList = (e) => {
    e.preventDefault();
    setShowCondition(!showCondition);
  };

  const [selectedBar, setSelectedBar] = useState("선택된 내용"); // selectedBar에 클릭된 옵션 보여주기
  const [searchInputValue, setSearchInputValue] = useState(""); // search text value

  //  옵션 리스트와 search bar의 value 값을 비교하여 공백일 경우 모든 옵션을 보여주고
  //  공백이 아닐 경우 value 값과 일치하는 옵션만을 보여준다.
  const filteredList =
    searchInputValue.length !== 0
      ? optionList.filter((option) => {
          const optionCondition = option.substring(0, searchInputValue.length);
          return (
            optionCondition.toUpperCase() === searchInputValue.toUpperCase()
          );
        })
      : optionList;

  return (
    <div className={"dropdown-container"}>
      <div className={"selected-content"} onClick={showOptionList}>
        <p>{selectedBar}</p>
        <i className={"dropdown-icon material-icons"}>arrow_drop_down</i>
      </div>

      <div
        className={"category"}
        style={{
          visibility: showCondition ? "visible" : "hidden",
        }}
      >
        <SearchBar
          showCondition={showCondition}
          setSearchInputValue={setSearchInputValue}
        />
        <OptionList
          setSelectedBar={setSelectedBar}
          setShowCondition={setShowCondition}
          showCondition={showCondition}
          filteredList={filteredList}
        />
      </div>
    </div>
  );
};

export default DropdownContent;
