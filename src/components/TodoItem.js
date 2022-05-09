import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./TodoItem.css";
import { IconContext } from "react-icons";
import { MdDelete, MdEdit } from "react-icons/md";
import TodoModal from "./TodoModal";

function TodoItem({ title, datetime, index, status, setTodos }) {
  const [checked, setChecked] = useState(status === "complete" ? true : false);
  const [isEditing, setIsEditing] = useState(false);

  const handleCheckChange = () => {
    setChecked((prevChecked) => !prevChecked);
    setTodos((prevTodos) =>
      prevTodos.slice(0, index).concat(
        [
          {
            ...prevTodos[index],
            status:
              prevTodos[index].status === "complete"
                ? "incomplete"
                : "complete",
          },
        ],
        prevTodos.slice(index + 1)
      )
    );
  };

  const handleDeleteClick = () => {
    setTodos((prevTodos) =>
      prevTodos.slice(0, index).concat(prevTodos.slice(index + 1))
    );
  };

  const handleEditClick = () => {
    setIsEditing((prevState) => !prevState);
  };

  const onModalSubmit = (e, newTitle, newStatus) => {
    e.preventDefault();
    setTodos((prevTodos) =>
      prevTodos
        .slice(0, index)
        .concat(
          [{ ...prevTodos[index], title: newTitle, status: newStatus }],
          prevTodos.slice(index + 1)
        )
    );
    setChecked(newStatus === "complete" ? true : false);
    setIsEditing(false);
  };

  const onModalClose = () => {
    setIsEditing(false);
  };

  return (
    <>
      <div className="todo-item">
        <div className="todo-item__left">
          <div className="todo-item__checkbox">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckChange}
            />
          </div>
          <div className="todo-item__details">
            <h3 className={`todo-item__title ${checked ? " checked" : ""}`}>
              {title}
            </h3>
            <div className="todo-item__datetime">{datetime}</div>
          </div>
        </div>
        <div className="todo-item__right">
          <IconContext.Provider value={{ size: "20px", color: "#585858" }}>
            <button className="icon-btn" onClick={handleEditClick}>
              <MdEdit />
            </button>
            <button className="icon-btn" onClick={handleDeleteClick}>
              <MdDelete />
            </button>
          </IconContext.Provider>
        </div>
      </div>
      {isEditing &&
        ReactDOM.createPortal(
          <TodoModal
            actionText="Edit Todo"
            onModalSubmit={onModalSubmit}
            onModalClose={onModalClose}
            initialTitle={title}
            initialStatus={status}
          />,
          document.getElementById("portal-root")
        )}
    </>
  );
}

export default TodoItem;
