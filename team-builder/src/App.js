import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import uuid from "uuid";

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

  const onFormSubmit = e => {
    e.preventDefault();
    const newTeamMember = {
      id: uuid(),
      name: teamForm.name,
      email: teamForm.email,
      role: teamForm.role
    };
    const newTeamList = teamList.concat(newTeamMember);
    setTeamList(newTeamList);
    setTeamForm(initialTeamForm);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form
          onNameChange={onNameChange}
          onEmailChange={onEmailChange}
          onRoleChange={onRoleChange}
          teamForm={teamForm}
          onFormSubmit={onFormSubmit}
        />
        {teamList.map(teamMember => (
          <div key={teamMember.id}>
            <p>Name: {teamMember.name}</p>
            <p>Email: {teamMember.email}</p>
            <p>Role: {teamMember.role}</p>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;