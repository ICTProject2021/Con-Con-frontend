import React, { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";
const Chargemodal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [res, setRes] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/profile/contest`, {
        headers: { Authorization: sessionStorage.getItem("token") },
      })
      //성공시 then 실행
      .then(function (response) {
        setRes(response.data.data);
        console.log(res);
      })
      //실패 시 catch 실행
      .catch(function (error) {
        alert("오류가 발생했습니다");
        console.log(error);
      });
  }, []);
  return (
    <>
      <Button
        variant="warning"
        onClick={handleShow}
        style={{ marginLeft: "10px" }}
      >
        참가한대회조회
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>내가 참가한 대회</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {res.map((data, index) => {
            return (
              <>
                <div>
                  <h2>{index + 1}번째대회</h2>
                  <h3>대회이름:{data.title}</h3>
                  <p>
                    대회기간:{data.startdate.substr(0, 10)}~
                    {data.duedate.substr(0, 10)}
                  </p>
                  <p>
                    <strong>대회 호스트</strong>:{data.host}
                  </p>
                  <img
                    src={`${process.env.REACT_APP_API_URL}/${data.profile}`}
                    style={{ width: "200px", height: "200px" }}
                  ></img>
                </div>
                <br></br>
                <br></br>
              </>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Chargemodal;
