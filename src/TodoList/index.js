import React from "react";
import "./TodoList.css";

function TodoList(props) {
  return <div className="TodoList-container">{props.children}</div>;
}

export { TodoList };
