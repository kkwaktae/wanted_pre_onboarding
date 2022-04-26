import React from "react";
import { useState, useRef, useEffect } from "react";

// e-mail input 컴포넌트
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

    // e-mail 양식 감지
    const regExp = /^([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (regExp.test(value)) {
      setEmailCheck(true);
      setDisplayReconfirm(false);
    } else if (value.trim() === "") {
      setDisplayReconfirm(false);
    } else {
      setEmailCheck(false);
    }
  };

  // 탭키 또는 엔터키 입력 시 email 형식 적합성 체크
  const confirmEmail = (e) => {
    const keyNumber = e.keyCode;

    if (keyNumber === 13) {
      // email 형식이 올바르지 않으면 오류 문구 보여주기
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

// Password input 컴포넌트
const PasswordInput = ({ types }) => {
  const [passwordType, setPasswordType] = useState(types[1]);
  const [passwordSafety, setPasswordSafety] = useState(true);
  const safetyIconColor = ["#aaa", "#00bfa5"];
  const passwordRef = useRef();

  useEffect(() => {
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

// form 박스
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

const InputContent = () => {
  return (
    <div className={"input-container"}>
      <InputForm />
    </div>
  );
};

export default InputContent;
