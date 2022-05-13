import styled from "styled-components";
export const Wrapper = styled.div`
  width: 80%;
  height: 870px;
  margin: 0 auto;
`;
export const Header = styled.div`
  /* border: 1px solid #000; */
  height: 10%;
  position: relative;
  margin-bottom: 20px;
`;
export const ContestList = styled.div`
  font-size: 2rem;
  position: absolute;
  border: "1px solid #000";
  bottom: 0;
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  height: 70%;
  justify-content: space-between;
  /* border: 1px solid #000; */
`;
export const ContentLeft = styled.div`
  display: grid;
  overflow-y: auto;
  grid-template-columns: 1fr 1fr;
  width: 65%;
  grid-column-gap: 30px;
  grid-row-gap: 40px;
  border-bottom: 1px solid skyblue;
`;
export const ContentRight = styled.div`
  width: 30%;
  border: 1px solid #c7c7c7;
  border-radius: 10px;
`;
export const Cardex = styled.div`
  position: relative;
  width: 95%;
  padding: 30px 40px;
  border-radius: 10px;
  grid-column-gap: 30px;
  height: 285px;
  border: 1px solid #c7c7c7;
`;
export const Button = styled.div`
  width: 30%;
  height: 45px;
  font-size: 26px;
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
  margin: 30px;
  bottom: 0;
  right: 0;
`;
export const Input = styled.input`
  border: none;
  font-size: 2rem;
  border-bottom: 1px solid #000;
`;
