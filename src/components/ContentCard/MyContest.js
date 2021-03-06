import React, { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";
const MyContest = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [res, setRes] = useState([]);
  return (
    <>
      <div onClick={handleShow} style={{ marginLeft: "10px" }}>
        참가한대회조회
      </div>
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
export default MyContest;
