//로그인 폼
import React, { useEffect, useState } from "react";
const AuthForm = () => {
  const [loginid, setLoginId] = useState("");
  const [loginpw, setLoginPw] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const toggleAccount = () => {
    setNewAccount((prev) => !prev);
  };
  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "inputId") {
      setLoginId(value);
    } else if (name === "inputPw") {
      setLoginPw(value);
    } else if (name === "nickname") {
      setNickname(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (newAccount) {
      //회원가입
    } else {
      //로그인
    }
  };
  return (
    <>
      {newAccount ? (
        <form onSubmit={onSubmit} className="loginForm">
          <h2>회원가입</h2>
          <div className="idForm">
            <input
              name="inputId"
              type="text"
              className="login_inputID"
              required
              placeholder="ID"
              value={loginid}
              onChange={onChange}
            ></input>
          </div>
          <div className="pwForm">
            <input
              name="inputPw"
              type="password"
              className="login_inputPW"
              placeholder="PW"
              required
              value={loginpw}
              onChange={onChange}
            ></input>
          </div>
          <div className="idForm">
            <input
              name="nickname"
              type="password"
              className="login_Nickname"
              required
              placeholder="nickname"
              value={nickname}
              onChange={onChange}
            ></input>
          </div>
          <div className="idForm">
            <input
              name="email"
              type="email"
              className="login_email"
              placeholder="email"
              required
              value={email}
              onChange={onChange}
            ></input>
          </div>
          <input type="submit" value="회원가입" className="log_btn"></input>
          <div onClick={toggleAccount} className="makeacc">
            <h3>계정이 있어요</h3>
          </div>
        </form>
      ) : (
        <form onSubmit={onSubmit} className="loginForm">
          <h2>로그인</h2>
          <div className="idForm">
            <input
              name="inputId"
              type="text"
              className="login_inputID"
              required
              placeholder="ID"
              value={loginid}
              onChange={onChange}
            ></input>
          </div>
          <div className="pwForm">
            <input
              name="inputPw"
              type="password"
              className="login_inputPW"
              placeholder="PW"
              required
              value={loginpw}
              onChange={onChange}
            ></input>
          </div>
          <input type="submit" value="로그인" className="log_btn"></input>
          <div onClick={toggleAccount} className="makeacc">
            <h3>계정 만들기</h3>
          </div>
        </form>
      )}
    </>
  );
};
export default AuthForm;
