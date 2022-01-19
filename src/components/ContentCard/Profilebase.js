import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Chargemodal from "./Chargemodal";
import Conmkmodal from "./Conmkmodal";
const Profilebase = ({ nickname, cash, profile }) => {
  const url = "http://ec2-18-191-238-179.us-east-2.compute.amazonaws.com:3000/";
  return (
    <div className="profilebase">
      <img src={url + profile} style={{ height: "50px" }}></img>
      <h2>{nickname}님 환영합니다</h2>
      <p>잔액:{cash}</p>
      <div>
        <Conmkmodal />
      </div>
      <br></br>
      <Chargemodal />
    </div>
  );
};
export default Profilebase;
