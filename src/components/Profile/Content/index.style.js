import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 700px;
`;
export const Header = styled.div`
  height: 10%;
  position: relative;
  margin-bottom: 20px;
`;
export const HeaderCon = styled.div`
  position: relative;
  font-size: 2rem;
  position: absolute;
  bottom: 0;
`;
export const Content = styled.div`
  margin: 0 auto;
  height: 80%;
  border: 1px solid #c7c7c7;
  text-align: center;
  div {
    font-size: 1.5rem;
    margin-top: 20px;
  }
`;
export const Input = styled.input`
  :focus {
    outline: none;
  }
  font-size: 1.5rem;
  border: none;
  border-bottom: 1px solid #000;
`;
export const File = styled.label`
  cursor: pointer;
  font-size: 20px;
`;
export const Filediv = styled.div`
  cursor: pointer;
  border-radius: 10px;
  background-color: skyblue;
  width: 100px;
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
`;
