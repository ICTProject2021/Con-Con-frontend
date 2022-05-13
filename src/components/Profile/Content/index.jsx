import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./index.style";
const Content = () => {
  const [Profiledata, setData] = useState("");
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}profile`, {
        headers: { Authorization: sessionStorage.getItem("token") },
      })
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
    <S.Wrapper>
      <S.Header>
        <S.HeaderCon>내 프로필</S.HeaderCon>
      </S.Header>
      <S.Content>
        <div>
          닉네임:
          <S.Input value={Profiledata.nickname}></S.Input>
        </div>
        <div>
          내 잔고:
          <S.Input value={Profiledata.cash}></S.Input>원
        </div>
        <div>
          <div>프로필사진</div>
          <div>
            <img
              src={process.env.REACT_APP_API_URL + Profiledata.profile}
              width={"300px"}
              height={"300px"}
            />
          </div>
          <S.Filediv>
            <S.File for="input-file">Upload</S.File>
            <input type="file" id="input-file" style={{ display: "none" }} />
          </S.Filediv>
        </div>
        <div></div>
      </S.Content>
    </S.Wrapper>
  );
};
export default Content;
