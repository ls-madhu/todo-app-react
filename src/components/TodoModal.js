import React, { useState } from "react";
import FocusTrap from "focus-trap-react";

import "./TodoModal.css";

function TodoModal({
  onModalClose,
  onModalSubmit,
  actionText,
  initialTitle = "",
  initialStatus = "incomplete",
}) {
  const [title, setTitle] = useState(initialTitle);
  const [status, setStatus] = useState(initialStatus);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleFormSubmit = (e) => {
    onModalSubmit(e, title, status);
  };

  const handleCancelModalClick = () => {
    onModalClose();
  };

  return (
    <FocusTrap>
      <div className="todo-modal">
        <form className="todo-modal__content" onSubmit={handleFormSubmit}>
          <h2>{actionText}</h2>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
          <label htmlFor="status">Status</label>
          <select id="status" value={status} onChange={handleStatusChange}>
            <option value="complete">Complete</option>
            <option value="incomplete">Incomplete</option>
          </select>
          <div className="todo-modal__actions">
            <button type="submit" className="btn">
              {actionText}
            </button>
            <button
              type="button"
              className="btn secondary"
              onClick={handleCancelModalClick}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </FocusTrap>
  );
}

export default TodoModal;
