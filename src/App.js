import React, { useState } from "react";
import ReactDOM from "react-dom";
import TodoListHeader from "./components/TodoListHeader";
import TodoList from "./components/TodoList";
import TodoModal from "./components/TodoModal";

import "./App.css";

function App() {
  const [todoFilter, setTodoFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [todos, setTodos] = useState([]);
  let filteredTodos;
  if (todoFilter === "all") {
    filteredTodos = todos;
  } else {
    filteredTodos = todos.filter((todo) => todo.status === todoFilter);
  }

  const onModalSubmit = (e, title, status) => {
    e.preventDefault();
    setTodos((prevTodos) => [
      {
        title,
        status,
        datetime: new Date().toLocaleString(),
        todoId: new Date().getTime(),
      },
      ...prevTodos,
    ]);
    setShowModal(false);
  };

  const onModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <TodoListHeader
        todoFilter={todoFilter}
        setTodoFilter={setTodoFilter}
        setShowModal={setShowModal}
      />
      <TodoList todos={filteredTodos} setTodos={setTodos} />
      {showModal &&
        ReactDOM.createPortal(
          <TodoModal
            onModalClose={onModalClose}
            actionText="Add Todo"
            onModalSubmit={onModalSubmit}
          />,
          document.getElementById("portal-root")
        )}
    </div>
  );
}

export default App;
