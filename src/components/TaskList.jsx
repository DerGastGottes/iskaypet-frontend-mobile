import React, { useState } from "react";

export const TaskList = ({ task, deleteTask }) => {
  const [checked, setChecked] = React.useState(task.completed);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="task">
      <p className="text-tareas-label">{task.title}</p>
      <p className="text-tareas-description">{task.title}</p>
      <p className="text-tareas-description">
        Completed{" "}
        <input type="checkbox" checked={checked} onChange={handleChange} />
      </p>
      <button className="btn-delete" onClick={() => deleteTask(task.id)}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/06c4ed425f78536817d1c6afb5ef05798a152e4fd2fc5a2e65013b51f530ae0b?"
          className="img"
        />
      </button>
    </div>
  );
};
