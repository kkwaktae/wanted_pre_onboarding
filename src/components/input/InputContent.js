import React from "react";
import { useState, useRef, useEffect } from "react";

/** EmailInput 컴포넌트
 *  e-mail 입력란을 제어합니다.
 *  e-mail을 입력할 때, 정규식을 감지하고, 양식에 맞을 때 true를 반환합니다
 *  true를 반환하면, reconfirm 문구가 노출되지 않습니다.
 * @param {Object} {types, emailCheck, setEmailCheck, displayReconfirm, setDisplayReconfirm}
 * @returns
 */
const EmailInput = ({
  types,
  emailCheck,
  setEmailCheck,
  displayReconfirm,
  setDisplayReconfirm,
}) => {
  const changeCheckIconColor = ["#aaa", "#00bfa5"];

  const emailFormCheck = (e) => {
    // e-mail 감지 메소드
    e.preventDefault();
    const value = e.target.value;

    // 정규식으로 e-mail 양식 감지
    const regExp = /^([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (regExp.test(value)) {
      //양식이 맞으면 emailCheck와 displayReconfirm 상태를 제어하여 상태에 적합한 UI 노출
      setEmailCheck(true);
      setDisplayReconfirm(false);
    } else if (value.trim() === "") {
      setDisplayReconfirm(false);
    } else {
      setEmailCheck(false);
    }
  };

  // 탭키 또는 엔터키 입력 시 email 형식 적합성 체크 후 UI 노출
  const confirmEmail = (e) => {
    const keyNumber = e.keyCode;

    if (keyNumber === 13) {
      // email 양식이 올바르지 않으면 오류 문구 보여주기
      if (!emailCheck) {
        setDisplayReconfirm(true);
      } else {
        setDisplayReconfirm(false);
      }
    } else if (keyNumber === 9) {
      if (!emailCheck) {
        setDisplayReconfirm(true);
      } else {
        setDisplayReconfirm(false);
      }
    }
  };

  return (
    <li className={"input-form"}>
      <p className={"email-title"}>E-mail</p>
      <div className={"email-box"}>
        <input
          type={types[0]}
          placeholder={"E-mail"}
          className={"input-email"}
          autoFocus
          onChange={emailFormCheck}
          onKeyDown={confirmEmail}
        />
        <i
          className={"icon-email material-icons"}
          style={{
            color: emailCheck
              ? changeCheckIconColor[1]
              : changeCheckIconColor[0],
          }}
        >
          check_circle
        </i>
      </div>
      <p
        className={"email-reconfirm"}
        style={{ visibility: displayReconfirm ? "visible" : "hidden" }}
      >
        invailed e-mail address
      </p>
    </li>
  );
};

/** PasswordInput 컴포넌트
 *  type 변경 UI 클릭 시 passwordSafety 상태값을 변경하고 input의 type을 password <-> text로 변경합니다.
 *  useRef 훅을 사용하여, type 변경 UI 클릭 시 passwordSafety의 값이 변화할 때만 재렌더링 되어 password 인풋의 커서 맨 마지막 위치에 포커싱합니다.
 * @param {Object} {types}
 * @returns
 */
const PasswordInput = ({ types }) => {
  const [passwordType, setPasswordType] = useState(types[1]);
  const [passwordSafety, setPasswordSafety] = useState(true);
  const safetyIconColor = ["#aaa", "#00bfa5"];
  const passwordRef = useRef();

  useEffect(() => {
    // passwordSafety의 값이 변화할 때만 재렌더링
    passwordRef.current.focus();
  }, [passwordSafety]);

  // password type(보안모드) 변경
  const changePasswordType = (e) => {
    e.preventDefault();

    if (passwordSafety) {
      setPasswordSafety(!passwordSafety);
      setPasswordType(types[0]);
    } else {
      setPasswordSafety(!passwordSafety);
      setPasswordType(types[1]);
    }
  };

  return (
    <li className={"input-form"}>
      <p className={"password-title"}>Password</p>
      <div className={"password-box"}>
        <input
          type={passwordType}
          placeholder={"Password"}
          className={"input-password"}
          ref={passwordRef}
        />
        <i
          className={"icon-password material-icons"}
          onClick={changePasswordType}
          style={{
            color: passwordSafety ? safetyIconColor[0] : safetyIconColor[1],
          }}
        >
          {passwordSafety ? "visibility_off" : "visibility"}
        </i>
      </div>
    </li>
  );
};

/** InputForm 컴포넌트
 *  emailCheck 변수로 e-mail UI에 대한 상태를 제어합니다.
 *  displayReconfirm 변수로 e-mail 정규식에 대한 상태를 제어합니다.
 * @returns
 */
const InputForm = () => {
  const types = ["text", "password"];
  const [emailCheck, setEmailCheck] = useState(false);
  const [displayReconfirm, setDisplayReconfirm] = useState(false);
  return (
    <ul className={"form"}>
      <EmailInput
        types={types}
        emailCheck={emailCheck}
        setEmailCheck={setEmailCheck}
        displayReconfirm={displayReconfirm}
        setDisplayReconfirm={setDisplayReconfirm}
      />
      <PasswordInput
        types={types}
        emailCheck={emailCheck}
        setEmailCheck={setEmailCheck}
        displayReconfirm={displayReconfirm}
        setDisplayReconfirm={setDisplayReconfirm}
      />
    </ul>
  );
};

/** InputContent 컴포넌트
 *  인풋 기능의 메인 컴포넌트
 * @returns
 */
const InputContent = () => {
  return (
    <div className={"input-container"}>
      <InputForm />
    </div>
  );
};

export default InputContent;
