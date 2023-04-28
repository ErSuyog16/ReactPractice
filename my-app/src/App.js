import "./App.css";
import React, { useState, useEffect } from "react";
import Practice from "./components/practice";
// import ResponsiveAppBar from "./components/navBar";
function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  });
  return (
    <>
      {/* <ResponsiveAppBar /> */}
      <Practice />
      <h1>{message}</h1>
    </>
  );
}

export default App;
