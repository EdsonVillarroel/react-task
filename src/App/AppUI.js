import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "./TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import './App.css';
import { TodosSearchLoading } from "../TodoSearchLoading";


function AppUI() {
  const {
    error,
    loading,
    completeTodo,
    deleteTodo,
    searchedTodos,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  const {searchValue,setSearchValue} = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <div className="App-header">

      <TodoCounter />
      <TodoSearch />
      </div>

      <TodoList>
        {error && <TodosError error={error}></TodosError>}
        {loading && <TodosLoading></TodosLoading>}
        {!loading && !searchedTodos.length && <EmptyTodos></EmptyTodos>}
        {searchValue && !searchedTodos.length && <TodosSearchLoading></TodosSearchLoading>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}

      <CreateTodoButton className="CreateTodoBUtton" setOpenModal={setOpenModal}/>
    </React.Fragment>
  );
}
export { AppUI };
