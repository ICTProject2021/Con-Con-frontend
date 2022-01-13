import React, { useState } from "react";
import logo from "../../img/logo.png";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

const Profilebase = ({ nickname, cash }) => {
  const [show, setShow] = useState(false);
  const [charge, setCharge] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name == "charge") {
      setCharge(value);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        "http://ec2-18-191-238-179.us-east-2.compute.amazonaws.com:3000/charge",
        {
          cash: charge,
        },
        { headers: { Authorization: sessionStorage.getItem("token") } }
      )
      //성공시 then 실행
      .then(function (response) {
        console.log(response);
        alert("충전에 성공하였습니다.");
        setCharge("");
        setShow(false);
        window.location.replace("/");
      })
      //실패 시 catch 실행
      .catch(function (error) {
        alert("오류가 발생했습니다");
        console.log(error);
      });
  };
  return (
    <div className="profilebase">
      <img src={logo}></img>
      <h2>{nickname}님 환영합니다</h2>
      <p>잔액:{cash}</p>
      <div>
        <Button className="infochange_but">정보수정</Button>
      </div>
      <br></br>
      <>
        <Button variant="warning" onClick={handleShow}>
          충전하기
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>캐쉬 충전하기</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            충전할 금액을 입력해주세요
            <form onSubmit={onSubmit} className="chargebut" onChange={onChange}>
              <div>
                <input
                  type="text"
                  name="charge"
                  value={charge}
                  onChange={onChange}
                ></input>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              닫기
            </Button>
            <Button variant="primary" onClick={onSubmit}>
              충전하기
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};
export default Profilebase;
