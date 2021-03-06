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
    const formData = new FormData();
    formData.append("attachment", uploadimg);
    formData.append("title", title);
    formData.append("content", coninfo);
    formData.append("startdate", startdate.replace(/-/gi, "/"));
    formData.append("duedate", duedate.replace(/-/gi, "/"));
    formData.append("prize[0][rank]", 1);
    formData.append("prize[0][price]", parseInt(first));
    formData.append("prize[1][rank]", 2);
    formData.append("prize[1][price]", parseInt(second));
    for (let key of formData.entries()) {
      console.log(`${key}`);
    }
    axios
      .post(`${process.env.REACT_APP_API_URL}/contest`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: sessionStorage.getItem("token"),
        },
      })
      //????????? then ??????
      .then(function (response) {
        console.log(response);
        alert("????????? ?????????????????????.");
        setShow(false);
        window.location.replace("/");
      })
      //?????? ??? catch ??????
      .catch(function (error) {
        alert("????????? ??????????????????");
        console.log(error);
      });
  };

  return (
    <>
      <Button
        style={{ marginLeft: "10px" }}
        variant="secondary"
        onClick={handleShow}
      >
        ?????? ??????
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>?????? ??????</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>?????? ??????</Form.Label>
              <Form.Control
                name="title"
                onChange={onChange}
                type="text"
                placeholder="????????? ???????????????"
              />
              <Form.Text className="text-muted">
                ????????? ????????? ???????????????
              </Form.Text>
            </Form.Group>
            <Form.Label>?????? ??????</Form.Label>
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
              <Form.Label>???????????????(startdate)</Form.Label>
              <Form.Control
                name="startdate"
                ref={startDate}
                type="date"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="startdate">
              <Form.Label>???????????????(duedate)</Form.Label>
              <Form.Control type="date" placeholder="Password" ref={dueDate} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="firstmon">
              <Form.Label>1?????????</Form.Label>
              <Form.Control
                name="firstmon"
                type="text"
                placeholder="prizeone"
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="secmon">
              <Form.Label>2?????????</Form.Label>
              <Form.Control
                name="secmon"
                type="text"
                placeholder="prizetwo"
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>??????</Form.Label>
              <Form.Control type="file" onChange={onChangeimg} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            ??????
          </Button>
          <Button variant="primary" onClick={onMakecon}>
            ?????? ??????
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Conmkmodal;
