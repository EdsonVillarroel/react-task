import React from "react";
import "./TodoItem.css";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";

function TodoItem(props) {
  return (
    <div className="TodoItem-container">
      <li className="TodoItem">
        <CompleteIcon
          completed={props.completed}
          onComplete={props.onComplete}
        />
        <p
          className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
        >
          {props.text}
        </p>
        <DeleteIcon onDelete={props.onDelete} />
      </li>
    </div>
  );
}

export { TodoItem };
