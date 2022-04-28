import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Leftcard from "./ContentCard/LeftCard";
import Profilebase from "./ContentCard/Profilebase";
import logo from "../img/logo.png";
const Content = () => {
  const [nickname, setNickname] = useState("");
  const [cash, setCash] = useState("");
  const [profile, setProfile] = useState("logo");
  const [datas, setData] = useState([]);
  const url = "http://10.80.162.36:3000";
  const getContestData = async () => {
    await axios
      .get(`${url}/contest`, {
        headers: { Authorization: sessionStorage.getItem("token") },
      })
      //성공시 then 실행
      .then(function (response) {
        if (response) {
          setData(response.data.data);
        }
      })
      //실패 시 catch 실행
      .catch(function (error) {
        alert("오류가 발생했습니다");
        console.log(error);
      });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/contest`, {
          headers: { Authorization: sessionStorage.getItem("token") },
        });
        if (response) {
          console.log(response.data.data);
          const basedata = response.data.data;
          setData(basedata.slice(0, 6));
          console.log(datas);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
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
  }, []);

  return (
    <div className="PageTemplate-contents">
      <div className="HomeTemplate">
        <div className="HomeTemplate-header">대회 목록</div>
        <div className="HomeTemplate-content">
          <div className="HomeTemplate-content-left">
            <div className="HomeTemplate-content-left-top">
              {datas.map((data, index) => (
                <Leftcard
                  profile={data.profile}
                  key={index}
                  cn={"content-card1"}
                  user={data.host}
                  title={data.title}
                  startdate={data.startdate}
                  duedate={data.duedate}
                />
              ))}
            </div>
          </div>
          <div className="HomeTemplate-content-right">
            <div className="HomeTemplate-content-right-top">
              <Profilebase nickname={nickname} cash={cash} profile={profile} />
              <br></br>
              <div
                className="advertise"
                style={{ textAlign: "center", lineHeight: "150px" }}
              >
                <img src={logo} style={{}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
