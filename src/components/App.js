import React, { useEffect, useState } from "react";
import AppRouter from "./Router";
import "../AuthForm.css";
const App = () => {
  const [load, setLoad] = useState(false);
  const [islog, setIslog] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIslog(true);
    }
  }, []);
  return <AppRouter islog={islog} />;
};

export default App;
