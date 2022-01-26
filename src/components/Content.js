import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Leftcard from "./ContentCard/LeftCard";
import Profilebase from "./ContentCard/Profilebase";
const Content = () => {
  const [nickname, setNickname] = useState("");
  const [cash, setCash] = useState("");
  const [profile, setProfile] = useState("logo");
  const [datas, setData] = useState([]);
  const url = "http://ec2-18-191-238-179.us-east-2.compute.amazonaws.com:3000";
  useEffect(() => {
    axios
      .get(url + "/profile", {
        headers: { Authorization: sessionStorage.getItem("token") },
      })
      //성공시 then 실행
      .then(function (response) {
        setNickname(response.data.data.nickname);
        setCash(response.data.data.cash);
        setProfile(response.data.data.profile);
      })
      //실패 시 catch 실행
      .catch(function (error) {
        alert("오류가 발생했습니다");
        console.log(error);
      });
    axios
      .get(
        "http://ec2-18-191-238-179.us-east-2.compute.amazonaws.com:3000/contest",
        { headers: { Authorization: sessionStorage.getItem("token") } }
      )
      //성공시 then 실행
      .then(function (response) {
        console.log(response);
        setData(response.data.data);
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
              <Leftcard
                cn={"content-card1"}
                user={datas[0].host}
                title={datas[0].title}
                startdate={datas[0].startdate}
              />
              <Leftcard cn={"content-card2"} />
            </div>
            <div className="HomeTemplate-content-left-mid">
              <Leftcard cn={"content-card1"} />
              <Leftcard cn={"content-card2"} />
            </div>
          </div>
          <div className="HomeTemplate-content-right">
            <div className="HomeTemplate-content-right-top">
              <Profilebase nickname={nickname} cash={cash} profile={profile} />
            </div>
            <div className="HomeTemplate-content-right-mid"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
