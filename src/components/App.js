import React, { useState } from "react";
import AppRouter from "./Router";
import "../App.css";
import Auth from "../routes/Auth";
const App = () => {
  const [load, setLoad] = useState(false);
  const [islog, setIslog] = useState(false);
  return <AppRouter />;
};

export default App;
