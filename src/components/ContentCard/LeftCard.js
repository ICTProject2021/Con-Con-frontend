import React from "react";
import logo from "../../img/logo.png";
const Leftcard = ({ cn, user, title, startdate }) => {
  return (
    <div className={cn}>
      <img src={logo}></img>
      <p>{user}</p>
      <h2>{title}</h2>
      <p>
        {startdate}~{}
      </p>
      <button className="part_but">자세히</button>
    </div>
  );
};
export default Leftcard;
