import React from "react";
import logo from "../img/logo.png";
const Content = () => {
  return (
    <div className="PageTemplate-contents">
      <div className="HomeTemplate">
        <div className="HomeTemplate-header">대회 목록</div>
        <div className="HomeTemplate-content">
          <div className="content-card">
            <img src={logo}></img>
            <p>user</p>
            <h2>코딩테스트</h2>
            <p>마감n일전</p>
            <button>대회 신청하기</button>
          </div>
          <div className="content-card-right">
            <p>user</p>
            <h2>코딩테스트</h2>
            <p>마감n일전</p>
            <button>대회 신청하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
