import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import github from "../img/github.png";
import { Height } from "@material-ui/icons";
const Info = () => {
  return (
    <>
      <Header />
      <div className="PageTemplate-contents">
        <div className="HomeTemplate">
          <div className="HomeTemplate-header">
            <h1 style={{ marginBottom: "35px" }}>
              Con-Con 프로젝트에 대해서..
            </h1>
          </div>
          <div className="HomeTemplate-content">
            <div>
              <div style={{ marginBottom: "35px" }}>
                SNS에서 대회나 이벤트를 열고 막상 상품을 수여할 때가 되면,
                갑자기 개최자가 대회나 이벤트를 무산시키거나 연락이 두절 되는
                경우를 종종 봐왔습니다. 그리고 대회 주체자가 처리해야 할 일이
                많기 때문에 개인이 대회를 개최하기는 쉽지 않았습니다. 이에
                대회에 대한 신뢰성을 부여하고, 개인이라도 쉽게 대회를 개최하고
                관리 할 수 있는 서비스가 있으면 좋겠다고 생각해, 대회 중계
                플랫폼을 고안하였습니다.
              </div>
              <h1 style={{ marginBottom: "35px" }}>팀원소개</h1>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <h2>안드로이드 팀원</h2>
                  <ul>
                    <li>
                      <h4>최승연</h4>
                      <img
                        src={github}
                        style={{ width: "40px", height: "40px" }}
                      ></img>
                    </li>
                    <li>
                      <h4>지민혁</h4>
                      <img
                        src={github}
                        style={{ width: "40px", height: "40px" }}
                      ></img>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2>백엔드 팀원</h2>
                  <ul>
                    <li>
                      <h4>손민균</h4>
                      <img
                        src={github}
                        style={{ width: "40px", height: "40px" }}
                      ></img>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2>프론트엔드 팀원</h2>
                  <ul>
                    <li>
                      <h4>강석현</h4>
                      <img
                        src={github}
                        style={{ width: "40px", height: "40px" }}
                      ></img>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Info;
