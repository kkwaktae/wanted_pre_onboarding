import React from "react";
import { useState } from "react";

// e-mail input
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

  const confirmEmail = (e) => {
    const keyNumber = e.keyCode;

    if (keyNumber === 13) {
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
    } else {
      return;
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

// Password input
const PasswordInput = ({
  types,
  emailCheck,
  setEmailCheck,
  displayReconfirm,
  setDisplayReconfirm,
}) => {
  const [passwordType, setPasswordType] = useState(types[1]);
  const [passwordSafety, setPasswordSafety] = useState(true);
  const safetyIconColor = ["#aaa", "#00bfa5"];

  const changeInputType = (e) => {
    e.preventDefault();

    if (passwordSafety) {
      // input type 변경
      setPasswordSafety(!passwordSafety);
      setPasswordType(types[0]);

      // icon 변경
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
        />
        <i
          className={"icon-password material-icons"}
          onClick={changeInputType}
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
