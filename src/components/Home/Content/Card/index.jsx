import React, { useState } from "react";
import ContestContent from "./Modal/ContestContent";
import * as S from "./index.style";
import Modal from "react-modal";
const Url = process.env.REACT_APP_API_URL;
const Leftcard = ({
  user,
  title,
  startdate,
  profile,
  duedate,
  content,
  prize,
  img,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const customStyles = {
    content: {
      width: "50%",
      height: "50%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <>
      <S.Wrapper>
        <div>
          <h1>{title}</h1>
          <p>마감N일전</p>
          <p>
            {startdate.substr(0, 10)}~{duedate.substr(0, 10)}
          </p>
          <div>
            <img
              src={Url + profile}
              width={"40px"}
              height={"40px"}
              style={{ borderRadius: "50px" }}
            ></img>
            &emsp;
            <a>{user}님 등록</a>
          </div>
        </div>
        <S.Button onClick={openModal}>
          <strong>자세히</strong>
        </S.Button>
        <Modal style={customStyles} isOpen={modalIsOpen}>
          This is Modal content
          <button onClick={closeModal}>asdf</button>
        </Modal>
      </S.Wrapper>
    </>
  );
};
export default Leftcard;
