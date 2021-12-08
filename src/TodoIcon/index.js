import React from 'react';
import './TodoIcon.css';
import { AiOutlineCheckCircle, AiOutlineDelete } from "react-icons/ai";;
const iconTypes = {
  "check": color => (
    <AiOutlineCheckCircle className="Icon-svg Icon-svg--check" fill={color} />
  ),
  "delete": color => (
    <AiOutlineDelete className="Icon-svg Icon-svg--delete" fill={color} />
  ),
};

function TodoIcon({ type, color = 'gray', onClick }) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };