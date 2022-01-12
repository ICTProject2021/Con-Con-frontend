import React, { useState } from "react";
import logo from "../../img/logo.png";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const Profilebase = ({ nickname, cash }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
            <div>
              <input></input>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              닫기
            </Button>
            <Button variant="primary" onClick={handleClose}>
              충전하기
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};
export default Profilebase;
