import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../Home.css";
import Content from "../components/Content";
const Home = () => {
  return (
    <div className="PageTemplate">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};
export default Home;
