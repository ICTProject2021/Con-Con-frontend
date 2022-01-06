//로그인 폼
import React, { useEffect, useState } from "react";
import axios from "axios";
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
      axios
        .post(
          "http://ec2-18-191-238-179.us-east-2.compute.amazonaws.com:3000/signup",
          {
            id: loginid,
            pw: loginpw,
            phonenum: email,
            nickname: nickname,
          }
        )
        //성공시 then 실행
        .then(function (response) {
          console.log(response);
        })
        //실패 시 catch 실행
        .catch(function (error) {
          alert("오류가 발생했습니다");
          console.log(error);
          setLoginId("");
          setLoginPw("");
          setNickname("");
          setEmail("");
        });
    } else {
      axios
        .post(
          "http://ec2-18-191-238-179.us-east-2.compute.amazonaws.com:3000/signin",
          {
            id: loginid,
            pw: loginpw,
          }
        )
        //성공시 then 실행
        .then(function (response) {
          console.log(loginid);
          console.log(loginpw);
          console.log(response);
          let ok = response.data.msg;
          let token = response.data.data;
          if (ok == "로그인 성공") {
            sessionStorage.setItem("token", token);
            alert("로그인 성공");
          } else {
            alert("아이디와 비밀번호가 일치하지 않습니다.");
          }
        })
        //실패 시 catch 실행
        .catch(function (error) {
          alert("아이디와 비밀번호가 일치하지 않습니다");
          console.log(error);
        });
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
              type="text"
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
              type="text"
              className="login_email"
              placeholder="phonenum"
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
