import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Chargemodal from "./Chargemodal";
import Conmkmodal from "./Conmkmodal";
const Profilebase = ({ nickname, cash, profile }) => {
  const url = "http://10.80.162.36:3000/";
  return (
    <div className="profilebase">
      <img
        src={url + profile}
        style={{ height: "50px", width: "60px", margin: "10px" }}
      ></img>
      <h2>{nickname}님 환영합니다</h2>
      <p>잔액:{cash}</p>
      <Conmkmodal />
      <br></br>
      <br></br>
      <Chargemodal />
    </div>
  );
};
export default Profilebase;
