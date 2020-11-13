import React from "react";

function Form(props) {
  return (
    <form>
      <input
        name="name"
        onChange={props.onchange}
        type="text"
        placeholder="Full Name"
        value={props.nameValue}
      />
      <input
        name="designation"
        onChange={props.onchange}
        type="text"
        placeholder="Designation"
        value={props.desigValue}
      />
      <button type="submit" onClick={props.onsubmit}>
        Add Employee
      </button>
    </form>
  );
}
export default Form;
