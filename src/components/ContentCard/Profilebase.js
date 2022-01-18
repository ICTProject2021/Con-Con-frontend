import React, { useState } from "react";
import logo from "../../img/logo.png";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Chargemodal from "./Chargemodal";
import Conmkmodal from "./Conmkmodal";
const Profilebase = ({ nickname, cash }) => {
  return (
    <div className="profilebase">
      <img src={logo}></img>
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
