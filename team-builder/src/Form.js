import React from "react";

function Form(props) {
  const { onNameChange, onEmailChange, onRoleChange, onFormSubmit, teamForm } = props;
  const { name, email, role } = teamForm;

  return (
    <form>
      <label htmlFor="nameInput">Name:</label>
      <input
        value={name}
        id="nameInput"
        type="text"
        onChange={onNameChange}
      ></input>

      <label htmlFor="emailInput">Email:</label>
      <input
        value={email}
        id="emailInput"
        type="text"
        onChange={onEmailChange}
      ></input>

      <label htmlFor="roleInput">Role:</label>
      <input
        value={role}
        id="roleInput"
        type="text"
        onChange={onRoleChange}
      ></input>

      <button onClick={onFormSubmit}>Submit!</button>
    </form>
  );
}

export default Form;
