import React, { useState, useEffect } from "react";
import axios from "axios";

function Tasks({ task, taskId }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  useEffect(() => {
    setEditedTask(task);
  }, [task]);

  const handleUpdate = () => {
    axios.put(
      `https://to-do-project-46be6-default-rtdb.firebaseio.com/task/${taskId}.json`,
      { newTask: editedTask }
    );

    setIsEdit(false);
  };
  const handleDelete = () => {
    axios.delete(
      `https://to-do-project-46be6-default-rtdb.firebaseio.com/task/${taskId}.json`
    );
  };
  return (
    <>
      {isEdit ? (
        <div className="task">
          <input
            className="editTask"
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <div className="icon-area">
            <i className="bi bi-check" onClick={handleUpdate}></i>
          </div>
        </div>
      ) : (
        <div className="task">
          <p>{task}</p>
          <div className="icon-area">
            <i
              className="bi bi-pencil-square"
              onClick={() => setIsEdit(true)}
            ></i>
            <i className="bi bi-check" onClick={handleDelete}></i>
          </div>
        </div>
      )}
    </>
  );
}

export default Tasks;
