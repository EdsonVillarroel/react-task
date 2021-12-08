import React from 'react';
import { TodoIcon } from './';

function CompleteIcon({ completed, onComplete }) {
    // console.log("ICON",completed)
  return (
    <TodoIcon
      type="check"
      color={completed ? '#4caf50' : 'grey'}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };