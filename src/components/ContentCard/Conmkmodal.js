import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import axios from "axios";
const Conmkmodal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        대회 생성
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>대회 등록</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>대회 제목</Form.Label>
              <Form.Control type="text" placeholder="제목을 입력하세요" />
              <Form.Text className="text-muted">
                제목을 정확히 적어주세요
              </Form.Text>
            </Form.Group>
            <Form.Label>대회 내용</Form.Label>
            <FloatingLabel controlId="floatingTextarea2">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "200px" }}
              />
            </FloatingLabel>
            <Form.Group className="mb-3" controlId="duedate">
              <Form.Label>대회시작일(startdate)</Form.Label>
              <Form.Control type="date" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="startdate">
              <Form.Label>대회종료일(duedate)</Form.Label>
              <Form.Control type="date" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="firstmon">
              <Form.Label>1등상금</Form.Label>
              <Form.Control type="text" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="secmon">
              <Form.Label>2등상금</Form.Label>
              <Form.Control type="text" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
          <Button variant="primary">대회 생성</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Conmkmodal;
