import React from "react";
import ContestContent from "./ContestContent";
const Leftcard = ({
  cn,
  user,
  title,
  startdate,
  profile,
  duedate,
  content,
  prize,
  img,
}) => {
  return (
    <div className={cn}>
      <img
        src={process.env.REACT_APP_API_URL + profile}
        style={{ width: "30px", height: "40px", margin: "20px" }}
      ></img>
      <p>개최자:{user}</p>
      <h2>{title}</h2>
      <p>
        {startdate.substr(0, 10)}~{duedate.substr(0, 10)}
      </p>
      <ContestContent content={content} prize={prize} img={img} />
    </div>
  );
};
export default Leftcard;
