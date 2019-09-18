import React from "react";




function Form() {
  return (
    <form>
      <label htmlFor="nameInput">Name:</label>
      <input value={name} id="nameInput" type="text"></input>

      <label htmlFor="emailInput">Email:</label>
      <input value={email} id="emailInput" type="text"></input>

      <label htmlFor="roleInput">Role:</label>
      <input value={role} id="roleInput" type="text"></input>

      <button>
          Submit!
      </button>
    </form>
  );
}
