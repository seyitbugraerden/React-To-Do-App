import React, { useState } from "react";

function Tasks({ task, index, deleteItem, updateItem }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleUpdate = () => {
    updateItem(index, editedTask);
    setIsEdit(false);
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
            <i className="bi bi-check" onClick={() => deleteItem(index)}></i>
          </div>
        </div>
      )}
    </>
  );
}

export default Tasks;
