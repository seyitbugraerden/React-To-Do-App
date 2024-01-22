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
        const fetchedTasks = Object.keys(response.data).map(taskId => ({
          taskId: taskId,
          newTask: response.data[taskId].newTask
        }));
        setTasks(fetchedTasks);
      })
      .catch(error => console.error('Görevleri alma hatası:', error));
  }, [tasks]);
  


const addTask = (newTask) => {
  axios.post("https://to-do-project-46be6-default-rtdb.firebaseio.com/task.json", { newTask })
    .then(response => {
      setTasks([...tasks, newTask]);
    })
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
            taskId={task.taskId}
            task={task.newTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;