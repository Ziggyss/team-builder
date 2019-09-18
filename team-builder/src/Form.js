import React from "react";

function Form() {
  const { onNameChange, onEmailChange, onRoleChange } = props;

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

      <button>Submit!</button>
    </form>
  );
}
