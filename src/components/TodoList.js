import React from "react";
import TodoItem from "./TodoItem";

import "./TodoList.css";

function TodoList({ todos, setTodos }) {
  return (
    <div className="todo-list">
      {!todos.length && <h2>No Todos Found.</h2>}
      {todos.map((todo, index) => (
        <TodoItem
          title={todo.title}
          datetime={todo.datetime}
          index={index}
          status={todo.status}
          key={todo.todoId}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}

export default TodoList;
