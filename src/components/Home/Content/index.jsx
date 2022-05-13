import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Input } from "reactstrap";
import Card from "./Card";
import * as S from "./index.style";
import ProfileCard from "./ProfileCard";

// import logo from "../img/logo.png";
const Content = () => {
  const [nickname, setNickname] = useState("");
  const [cash, setCash] = useState("");
  const [profile, setProfile] = useState("logo");
  const [datas, setData] = useState([]);
  const url = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}contest`, {
          headers: { Authorization: sessionStorage.getItem("token") },
        });
        if (response) {
          const basedata = response.data.data;
          setData(basedata);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    axios
      .get(url + "profile", {
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
    <S.Wrapper>
      <S.Header>
        <S.ContestList>
          <a style={{ color: "skyblue" }}>대회 목록</a>
          <S.Input placeholder="대회를 검색하세요" />
        </S.ContestList>
      </S.Header>
      <S.Content>
        <S.ContentLeft>
          {!(datas.length === 0) ? (
            datas.map((data, index) => (
              <Card
                profile={data.profile}
                key={index}
                idx={index}
                user={data.host}
                title={data.title}
                startdate={data.startdate}
                duedate={data.duedate}
                content={data.content}
                prize={data.prize}
                img={data.URL}
              />
            ))
          ) : (
            <>
              <S.Cardex>대회정보가 없습니다</S.Cardex>
              <S.Cardex></S.Cardex>
              <S.Cardex></S.Cardex>
              <S.Cardex></S.Cardex>
            </>
          )}
        </S.ContentLeft>
        <S.ContentRight>
          <ProfileCard profile={profile} nickname={nickname} cash={cash} />
        </S.ContentRight>
      </S.Content>
    </S.Wrapper>
  );
};
export default Content;
