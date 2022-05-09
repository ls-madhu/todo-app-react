import React from "react";
import AddTodo from "./AddTodo";
import TodoFilter from "./TodoFilter";

import "./TodoListHeader.css";

function TodoListHeader({ todoFilter, setTodoFilter, setShowModal }) {
  return (
    <div className="todo-list__header">
      <AddTodo setShowModal={setShowModal} />
      <TodoFilter todoFilter={todoFilter} setTodoFilter={setTodoFilter} />
    </div>
  );
}

export default TodoListHeader;
