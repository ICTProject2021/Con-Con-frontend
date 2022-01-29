import React from "react";
import logo from "../../img/logo.png";
const Leftcard = ({ cn, user, title, startdate, profile, duedate }) => {
  const url = "http://ec2-18-191-238-179.us-east-2.compute.amazonaws.com:3000/";
  return (
    <div className={cn}>
      <img src={url + profile} style={{ height: "40px" }}></img>
      <p>{user}</p>
      <h2>{title}</h2>
      <p>
        {startdate.substr(0, 10)}~{duedate.substr(0, 10)}
      </p>
      <button className="part_but">자세히</button>
    </div>
  );
};
export default Leftcard;
