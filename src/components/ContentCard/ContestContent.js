import React, { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
const ContestContent = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button
        className="part_but"
        variant="warning"
        onClick={handleShow}
        style={{ marginLeft: "10px" }}
      >
        상세히
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>대회 정보</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h2>{props.content}</h2>
          </div>
          <div>
            <h4>1등상금:{props.prize[0].price}원</h4>
          </div>
          <div>
            <h4>2등상금:{props.prize[1].price}원</h4>
          </div>
          <img
            src={process.env.REACT_APP_API_URL + "/" + props.img[0]}
            style={{ height: "300px", width: "300px", margin: "0 auto" }}
          ></img>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
          <Button variant="primary">충전하기</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ContestContent;
