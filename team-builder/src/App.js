import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const initialTeamList = [
  {
    name: "",
    id: "",
    email: "",
    role: ""
  }
];

function App() {
  const [teamList, setTeamList] = useState(initialTeamList);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p key={teamList.id}>
          Name: {teamList.name}
          Email: {teamList.email}
          Role: {teamList.role}
        </p>
        {/*       <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
