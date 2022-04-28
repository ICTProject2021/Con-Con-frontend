import React from "react";
import logo from "../../img/logo.png";
const Leftcard = ({ cn, user, title, startdate, profile, duedate }) => {
  const url = "http://10.80.162.36:3000/";
  return (
    <div className={cn}>
      <img
        src={url + profile}
        style={{ width: "30px", height: "40px", margin: "20px" }}
      ></img>
      <p>개최자:{user}</p>
      <h2>{title}</h2>
      <p>
        {startdate.substr(0, 10)}~{duedate.substr(0, 10)}
      </p>
      <button className="part_but">자세히</button>
    </div>
  );
};
export default Leftcard;
