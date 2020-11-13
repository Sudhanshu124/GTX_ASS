import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img
        id={props.id}
        className="deleteIcon"
        onClick={props.onClick}
        src="https://image.flaticon.com/icons/png/512/61/61848.png"
        width="20px"
        height="20px"
      />
      <h3>Employee ID: {props.id}</h3>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

export default Card;
