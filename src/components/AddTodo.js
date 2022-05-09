import React from "react";

function AddTask({ setShowModal }) {
  const handleAddTodoClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <button className="btn" onClick={handleAddTodoClick}>
        Add Todo
      </button>
    </>
  );
}

export default AddTask;
