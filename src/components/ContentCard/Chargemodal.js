import React, { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";
const Chargemodal = () => {
  const Url = "http://10.80.162.36:3000";
  const moneyInput = useRef();
  const options = [
    {
      label: "선택",
      value: "choice",
    },
    {
      label: "1000",
      value: "cheonwon",
    },
    {
      label: "5000",
      value: "cheonwon",
    },
    {
      label: "10000",
      value: "cheonwon",
    },
    {
      label: "20000",
      value: "cheonwon",
    },
    {
      label: "50000",
      value: "cheonwon",
    },
  ];
  const [show, setShow] = useState(false);
  const [charge, setCharge] = useState("");
  const isAdmin = useState(true);
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
        `${Url}/charge`,
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
    <>
      <Button
        variant="warning"
        onClick={handleShow}
        style={{ marginLeft: "10px" }}
      >
        충전하기
      </Button>
      {isAdmin ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>캐쉬 충전하기</Modal.Title>
          </Modal.Header>
          <Modal.Body>충전은 모바일에서 진행해주세요^^</Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              닫기
            </Button>
            <Button variant="primary" onClick={onSubmit}>
              충전하기
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>캐쉬 충전하기</Modal.Title>
          </Modal.Header>
          <Modal.Body>충전할 금액을 입력해주세요</Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              닫기
            </Button>
            <Button variant="primary" onClick={onSubmit}>
              충전하기
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};
export default Chargemodal;
