import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>Running records</span>
        <ul style={{ listStyle: "none", fontSize: "0.7em" }}>
          <li>Marathon time: 2:44:37 (Zagreb 2016) </li>
          <li>24h: 211.600km (Brussels Circadian Race 2018)</li>
        </ul>
      </header>
    </div>
  );
}

export default App;

//https://www.uitagendautrecht.nl/en/nikola-horvat/
