import React from "react";
import { TodoContext } from "../App/TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const {searchValue,setSearchValue} = React.useContext(TodoContext);
  
  const onSearchValueChange = (event) => {
    // console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <div className="TodoSearch-container">

    <input
      className="TodoSearch"
      placeholder="Filter TODOs"
      value={searchValue}
      onChange={onSearchValueChange}
      />
      </div>
  );
}

export { TodoSearch };
