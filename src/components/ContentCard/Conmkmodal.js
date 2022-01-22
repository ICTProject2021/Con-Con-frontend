import React, { useState, useRef } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import axios from "axios";
const Conmkmodal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [coninfo, setConinfo] = useState("");
  const [first, setFirst] = useState();
  const [second, setSecond] = useState("");
  const [uploadimg, setUploadimg] = useState("");
  const startDate = useRef();
  const dueDate = useRef();

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "title") {
      setTitle(value);
    } else if (name === "coninfo") {
      setConinfo(value);
    } else if (name === "firstmon") {
      setFirst(value);
    } else if (name === "secmon") {
      setSecond(value);
    }
  };
  const onChangeimg = (e) => {
    e.preventDefault();
    if (e.target.files) {
      const uploadFile = e.target.files[0];
      setUploadimg(uploadFile);
    }
  };
  const onMakecon = () => {
    let startdate = startDate.current.value;
    let duedate = dueDate.current.value;
    let prizedata = [
      {
        rank: 1,
        price: parseInt(first),
      },
      {
        rank: 2,
        price: parseInt(second),
      },
    ];
    const formData = new FormData();
    formData.append("attachment", uploadimg);
    formData.append("title", title);
    formData.append("content", coninfo);
    formData.append("startdate", startdate.replace(/-/gi, "/"));
    formData.append("duedate", duedate.replace(/-/gi, "/"));
    formData.append(
      "prize",
      new Blob(
        [
          JSON.stringify(
            {
              rank: 1,
              price: parseInt(first),
            },
            {
              rank: 2,
              price: parseInt(second),
            }
          ),
        ],
        { type: "application/json" }
      )
    );
    for (let key of formData.entries()) {
      console.log(`${key}`);
    }
    axios
      .post(
        "http://ec2-18-191-238-179.us-east-2.compute.amazonaws.com:3000/contest",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: sessionStorage.getItem("token"),
          },
        }
      )
      //성공시 then 실행
      .then(function (response) {
        console.log(response);
      })
      //실패 시 catch 실행
      .catch(function (error) {
        alert("오류가 발생했습니다");
        console.log(error);
      });
  };

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
              <Form.Control
                name="title"
                onChange={onChange}
                type="text"
                placeholder="제목을 입력하세요"
              />
              <Form.Text className="text-muted">
                제목을 정확히 적어주세요
              </Form.Text>
            </Form.Group>
            <Form.Label>대회 내용</Form.Label>
            <FloatingLabel controlId="floatingTextarea2">
              <textarea
                name="coninfo"
                onChange={onChange}
                className="form-control"
                placeholder="Leave a comment here"
                style={{ height: "200px" }}
              />
            </FloatingLabel>
            <Form.Group className="mb-3" controlId="duedate">
              <Form.Label>대회시작일(startdate)</Form.Label>
              <Form.Control
                name="startdate"
                ref={startDate}
                type="date"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="startdate">
              <Form.Label>대회종료일(duedate)</Form.Label>
              <Form.Control type="date" placeholder="Password" ref={dueDate} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="firstmon">
              <Form.Label>1등상금</Form.Label>
              <Form.Control
                name="firstmon"
                type="text"
                placeholder="prizeone"
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="secmon">
              <Form.Label>2등상금</Form.Label>
              <Form.Control
                name="secmon"
                type="text"
                placeholder="prizetwo"
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>사진</Form.Label>
              <Form.Control type="file" onChange={onChangeimg} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
          <Button variant="primary" onClick={onMakecon}>
            대회 생성
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Conmkmodal;
