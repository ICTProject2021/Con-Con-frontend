import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import MyContest from "../../../ContentCard/MyContest";
import * as S from "./index.style";
const ProfileCard = ({ profile, nickname, cash }) => {
  const [onMycon, setOnMycon] = useState(true);
  const [res, setRes] = useState([]);
  const logout = () => {
    const confirmflag = window.confirm("로그아웃 하시겠습니까?");
    if (confirmflag) {
      sessionStorage.removeItem("token");
      window.location.replace("/");
    }
  };
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}profile/contest`, {
        headers: { Authorization: sessionStorage.getItem("token") },
      })
      //성공시 then 실행
      .then(function (response) {
        setRes(response.data.data);
        console.log(res);
      })
      //실패 시 catch 실행
      .catch(function (error) {
        alert("오류가 발생했습니다");
        console.log(error);
      });
  }, []);
  const onClcikMycon = () => {
    setOnMycon((prev) => !prev);
  };

  return (
    <>
      <S.ProfileHeader>
        <S.ProfileHeaderLeft>
          <img
            src={process.env.REACT_APP_API_URL + profile}
            width={"70px"}
            height={"70px"}
            style={{
              borderRadius: "50px",
              marginTop: "10px",
            }}
          ></img>
        </S.ProfileHeaderLeft>
        <S.ProfileHeaderMid>
          <S.UserInfo>
            <div>
              <a
                style={{
                  fontSize: "1.5rem",
                  marginRight: "5px",
                }}
              >
                {nickname}
              </a>
              <u style={{ cursor: "pointer" }}>내정보</u>
            </div>
            <a>일반사용자</a>
            <div>내 잔고:{cash}</div>
          </S.UserInfo>
        </S.ProfileHeaderMid>
        <S.ProfileHeaderRight>
          <S.Logout onClick={logout}>
            <strong>로그아웃</strong>
          </S.Logout>
        </S.ProfileHeaderRight>
      </S.ProfileHeader>
      <S.ProfileMid>
        <S.ProfileMidLeft onClick={onClcikMycon}>MyContest</S.ProfileMidLeft>
        <S.ProfileMidRight>lorem insup</S.ProfileMidRight>
      </S.ProfileMid>
      <S.ProfileBot>
        {onMycon &&
          res.map((data, i) => {
            return (
              <S.ConList>
                <div style={{ padding: "10px" }}>
                  <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                    {data.title}
                  </div>
                  <div>
                    대회기간:{data.startdate.substr(0, 10)}~
                    {data.duedate.substr(0, 10)}
                  </div>
                </div>
              </S.ConList>
            );
          })}
      </S.ProfileBot>
    </>
  );
};
export default ProfileCard;
