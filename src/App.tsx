import React from "react";
import push2 from "./push2.jpg";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${push2})` }}>
      <div className="content"></div>
    </div>
  );
}

export default App;
