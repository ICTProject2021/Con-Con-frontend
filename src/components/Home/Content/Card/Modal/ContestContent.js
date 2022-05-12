import React, { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
const ContestContent = ({ content, prize, img }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button onClick={handleShow}>상세히</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>대회 정보</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <div>
            <h2>{content}</h2>
          </div>
          <div>
            <h4>1등상금:{prize[0].price}원</h4>
          </div>
          <div>
            <h4>2등상금:{prize[1].price}원</h4>
          </div>
          <img
            src={process.env.REACT_APP_API_URL + "/" + img[0]}
            style={{ height: "300px", width: "300px", margin: "0 auto" }}
          ></img> */}
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
export default ContestContent;
