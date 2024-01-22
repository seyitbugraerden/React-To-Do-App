import React, { useState } from 'react';
import TaskAdd from './components/TaskAdd';
import Tasks from './components/Tasks';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(["HTML, CSS, JS Öğrenilecek","React.JS Öğrenilecek"]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteItem = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const updateItem = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <div className="list-area">
        <h2>Yapılacaklar Listesi</h2>
        <TaskAdd onAddTask={addTask} />
        {tasks.map((task, index) => (
          <Tasks
            key={index}
            index={index}
            task={task}
            deleteItem={deleteItem}
            updateItem={updateItem}
          />
        ))}
      </div>
    </div>
  );
}

export default App;