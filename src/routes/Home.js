import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../Home.css"
const Home = () => {
  return(
    <div className="home-wrapper">
    <Header/>
    <div className="home-container">
      대회 목록
      <div>
        <div> 유저 이름 로고</div>
        <button>대회 만들기</button>
      </div>
    </div>
    <Footer/>
    </div>
)
};
export default Home;
