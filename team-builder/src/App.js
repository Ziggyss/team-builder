import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";

const initialTeamList = [
  {
    name: "",
    id: "",
    email: "",
    role: ""
  }
];

const initialTeamForm = {
  name: "",
  email: "",
  role: ""
};

function App() {
  const [teamList, setTeamList] = useState(initialTeamList);
  const [teamForm, setTeamForm] = useState(initialTeamForm);

  const onNameChange = e => {
    setTeamForm({
      name: e.target.value,
      email: teamForm.email,
      role: teamForm.role
    });
  };

  const onEmailChange = e => {
    setTeamForm({
      name: teamForm.name,
      email: e.target.value,
      role: teamForm.role
    });
  };

  const onRoleChange = e => {
    setTeamForm({
      name: teamForm.name,
      email: teamForm.email,
      role: e.target.value
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form
          onNameChange={onNameChange}
          onEmailChange={onEmailChange}
          onRoleChange={onRoleChange}
          teamForm={teamForm}
        />
        <p key={teamList.id}>
          Name: {teamList.name}
          Email: {teamList.email}
          Role: {teamList.role}
        </p>
      </header>
    </div>
  );
}

export default App;
