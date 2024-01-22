import React, { useEffect, useState } from 'react';
import TaskAdd from './components/TaskAdd';
import Tasks from './components/Tasks';
import axios from 'axios'
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('https://to-do-project-46be6-default-rtdb.firebaseio.com/task.json')
        .then(response => {
            const tasksArray = Object.values(response.data);
            setTasks(tasksArray.map(task => task.newTask));
        })
}, []);




const addTask = (newTask) => {
  axios.post("https://to-do-project-46be6-default-rtdb.firebaseio.com/task.json", { newTask })
    .then(response => {
      setTasks([...tasks, newTask]);
    })
    .catch(error => console.error('Görev ekleme hatası:', error));
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