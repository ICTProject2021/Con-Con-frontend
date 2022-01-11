import React from "react";
import logo from "../../img/logo.png";
const Leftcard = () => {
  return (
    <div className="content-card1">
      <img src={logo}></img>
      <p>user</p>
      <h2>코딩테스트</h2>
      <p>마감n일전</p>
      <button className="part_but">대회 신청</button>
    </div>
  );
};
export default Leftcard;
