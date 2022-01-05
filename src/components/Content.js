import React from "react";
import logo from "../img/logo.png";
const Content = () => {
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
                <button>대회 신청하기</button>
              </div>
              <div className="content-card2">
                <img src={logo}></img>
                <p>user</p>
                <h2>코딩테스트</h2>
                <p>마감n일전</p>
                <button>대회 신청하기</button>
              </div>
            </div>
            <div className="HomeTemplate-content-left-mid">
              <div className="content-card1">
                <img src={logo}></img>
                <p>user</p>
                <h2>코딩테스트</h2>
                <p>마감n일전</p>
                <button>대회 신청하기</button>
              </div>
              <div className="content-card2">
                <img src={logo}></img>
                <p>user</p>
                <h2>코딩테스트</h2>
                <p>마감n일전</p>
                <button>대회 신청하기</button>
              </div>
            </div>
          </div>
          <div className="HomeTemplate-content-right">
            <div className="HomeTemplate-content-right-top">
              <div className="profilebase"></div>
            </div>
            <div className="HomeTemplate-content-right-mid"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
