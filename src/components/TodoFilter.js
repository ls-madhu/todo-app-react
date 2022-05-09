import React from "react";

function TaskFilter({ todoFilter, setTodoFilter }) {
  const handleSelectChange = (e) => {
    setTodoFilter(e.target.value);
  };

  return (
    <>
      <select
        className="btn secondary"
        onChange={handleSelectChange}
        value={todoFilter}
      >
        <option value="all">All</option>
        <option value="complete">Complete</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </>
  );
}

export default TaskFilter;
