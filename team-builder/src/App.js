import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import uuid from "uuid";
import logo from "./logo.svg";

const initialTeamList = [
  {
    name: "Lisa",
    id: "1",
    email: "lisa-wilton@protonmail.com",
    role: "Uncertain Developer and provider of cheer"
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
  const [memberToEdit, setMemberToEdit] = useState('');

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

  const onEditButtonPress = (e, member) => {
    e.preventDefault();
    setMemberToEdit({
      name: memberToEdit.name,
      email: memberToEdit.email,
      role: memberToEdit.role,
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Add To Our Team Below!</h1>
        <Form
          onNameChange={onNameChange}
          onEmailChange={onEmailChange}
          onRoleChange={onRoleChange}
          teamForm={teamForm}
          onFormSubmit={onFormSubmit}
          onEditButtonPress={onEditButtonPress}
        />
        {teamList.map(teamMember => (
          <div key={teamMember.id}>
            <p>
              Name: {teamMember.name}
              <button onClick={onEditButtonPress}>Edit</button>
            </p>
            <p>Email: {teamMember.email}</p>
            <p>Role: {teamMember.role}</p>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
