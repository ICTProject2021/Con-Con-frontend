import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import logo from "../img/logo.png";
const Content = () => {
  const [nickname, setNickname] = useState("");
  const [cash, setCash] = useState("");
  const [profile, setProfile] = useState("logo");
  useEffect(() => {
    axios
      .get(
        "http://ec2-18-191-238-179.us-east-2.compute.amazonaws.com:3000/profile",
        { headers: { Authorization: sessionStorage.getItem("token") } }
      )
      //성공시 then 실행
      .then(function (response) {
        console.log(response);
        setNickname(response.data.data.nickname);
        setCash(response.data.data.cash);
        setProfile(response.data.data.profile);
      })
      //실패 시 catch 실행
      .catch(function (error) {
        alert("오류가 발생했습니다");
        console.log(error);
      });
  }, []);
  return (
    <div className="PageTemplate-contents">
      <div className="HomeTemplate">
        <div className="HomeTemplate-header">대회 목록</div>
        <div className="HomeTemplate-content">
          <div className="HomeTemplate-content-left">
            <div className="HomeTemplate-content-left-top">
              <div className="content-card1">
                <img src={logo}></img>
                <p>user</p>
                <h2>코딩테스트</h2>
                <p>마감n일전</p>
                <button className="part_but">대회 신청하기</button>
              </div>
              <div className="content-card2">
                <img src={logo}></img>
                <p>user</p>
                <h2>코딩테스트</h2>
                <p>마감n일전</p>
                <button className="part_but">대회 신청하기</button>
              </div>
            </div>
            <div className="HomeTemplate-content-left-mid">
              <div className="content-card1">
                <img src={logo}></img>
                <p>user</p>
                <h2>코딩테스트</h2>
                <p>마감n일전</p>
                <button className="part_but">대회 신청하기</button>
              </div>
              <div className="content-card2">
                <img src={logo}></img>
                <p>user</p>
                <h2>코딩테스트</h2>
                <p>마감n일전</p>
                <button className="part_but">대회 신청하기</button>
              </div>
            </div>
          </div>
          <div className="HomeTemplate-content-right">
            <div className="HomeTemplate-content-right-top">
              <div className="profilebase">
                <img src={profile}></img>
                <h2>{nickname}님 환영합니다</h2>
                <p>잔액:{cash}</p>
                <button className="infochange_but">정보수정</button>
                <button className="logout_but">로그아웃</button>
              </div>
            </div>
            <div className="HomeTemplate-content-right-mid"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
