import styled from "styled-components";
export const ProfileHeader = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  height: 100px;
  border-bottom: 1px solid #c7c7c7;
`;
export const ProfileHeaderLeft = styled.div`
  text-align: center;
  width: 25%;
`;
export const ProfileHeaderMid = styled.div`
  display: block;
  width: 50%;
`;
export const ProfileHeaderRight = styled.div`
  width: 25%;
  position: relative;
`;
export const Logout = styled.div`
  cursor: pointer;
  position: absolute;
  margin-bottom: 5px;
  bottom: 0;
  right: 0;
`;
export const UserInfo = styled.div`
  margin-top: 5px;
  div {
    margin-bottom: 5px;
  }
`;
export const ProfileMid = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  border-bottom: 1px solid #c7c7c7;
`;
export const ProfileMidLeft = styled.div`
  cursor: pointer;
  background-color: #c4c4c4;
  text-align: center;
  width: 50%;
  line-height: 50px;
`;
export const ProfileMidRight = styled.div`
  cursor: pointer;
  text-align: center;
  width: 50%;
  line-height: 50px;
`;
export const ProfileBot = styled.div`
  width: 100%;
  height: 430px;
  overflow: auto;
`;
export const ConList = styled.div`
  cursor: pointer;
  :hover {
    background-color: #c7c7c7;
  }
  width: 100%;
  position: relative;
  height: 70px;
  border-bottom: 1px solid #c7c7c7;
  text-align: center;
`;
