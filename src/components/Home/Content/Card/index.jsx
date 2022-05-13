import React, { useState } from "react";
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
      height: "80%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const masTime = new Date(duedate.substr(0, 10));
  const todayTime = new Date();
  const diff = masTime - todayTime;
  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
  return (
    <>
      <S.Wrapper>
        <div>
          <h1>{title}</h1>
          <p>마감{diffDay}일전</p>
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
        <S.CardButton onClick={openModal}>자세히</S.CardButton>
        <Modal style={customStyles} isOpen={modalIsOpen} ariaHideApp={false}>
          <S.ModalHeader>
            <h1>대회 정보</h1>
            <div>대회 주최자:{user}</div>
            <div>
              대회 기간 {startdate.substr(0, 10)}~{duedate.substr(0, 10)}
            </div>
            <div>대회1등 상금:10000원</div>
          </S.ModalHeader>
          <S.ModalContent>
            <div>대회 설명:{content}</div>
            {img.length == 1 ? (
              <>
                <img
                  src={process.env.REACT_APP_API_URL + "/" + img[0]}
                  style={{ height: "300px", width: "300px", margin: "0 auto" }}
                ></img>
              </>
            ) : (
              <></>
            )}
            {img.length == 2 ? (
              <>
                <img
                  src={process.env.REACT_APP_API_URL + "/" + img[0]}
                  style={{ height: "300px", width: "300px", margin: "0 auto" }}
                ></img>
                <img
                  src={process.env.REACT_APP_API_URL + "/" + img[1]}
                  style={{ height: "300px", width: "300px", margin: "0 auto" }}
                ></img>
              </>
            ) : (
              <></>
            )}
            <S.Closebtn onClick={closeModal}>
              <a>닫기</a>
            </S.Closebtn>
          </S.ModalContent>
        </Modal>
      </S.Wrapper>
    </>
  );
};
export default Leftcard;
