import React, { useState } from "react";

function TaskAdd({ onAddTask }) {
  const [term, setTerm] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    onAddTask(term);
    setTerm("");
  };

  return (
    <form onSubmit={addTask} className="task-add">
      <input
        type="text"
        placeholder="Ne Yapacağız?"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button onClick={addTask}>Görev Ekle</button>
    </form>
  );
}

export default TaskAdd;
