import styled from "styled-components";
export const Wrapper = styled.div`
  position: relative;
  width: 95%;
  padding: 30px 40px;
  border-radius: 10px;
  grid-column-gap: 30px;
  height: 285px;
  border: 1px solid #c7c7c7;
`;
export const CardButton = styled.div`
  cursor: pointer;
  width: 30%;
  height: 45px;
  font-size: 20px;
  background: linear-gradient(
    91.71deg,
    #eba232 -2.16%,
    #f77d00 71.31%,
    #ea5413 105.25%
  );
  text-align: center;
  line-height: 45px;
  position: absolute;
  border-radius: 10px;
  border: "1px solid #000";
  margin: 30px;
  bottom: 0;
  right: 0;
`;
export const ModalHeader = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  div {
    font-size: 1.3rem;
    text-align: left;
    margin-bottom: 15px;
  }
`;
export const ModalContent = styled.div`
  width: 80%;
  margin: 0 auto;
  div {
    font-size: 1.3rem;
  }
`;
export const Closebtn = styled.div`
  cursor: pointer;
  width: 100px;
  :hover {
    background-color: orange;
  }
  background-color: skyblue;
  margin: 0 auto;
  border-radius: 10px;
  height: 50px;
  line-height: 50px;
  text-align: center;
`;
