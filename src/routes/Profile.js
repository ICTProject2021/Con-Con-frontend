import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Profile = () => {
  return (
    <div className="PageTemplate">
      <Header />
      <div className="PageTemplate-contents">
        <p>프로필 사진 업로드</p>
        <input type="file"></input>
      </div>
      <Footer />
    </div>
  );
};
export default Profile;
