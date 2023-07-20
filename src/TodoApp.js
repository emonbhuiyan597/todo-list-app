import React, { useState } from 'react';
import './TodoApp.css'; 

const TodoApp = () => {

  const [tasks, setTasks] = useState([]);


  const [inputValue, setInputValue] = useState('');

 
  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { description: inputValue, completed: false }]);
      setInputValue(''); 
    }
  };

  
  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-app">
      <h2>Todo List</h2>
      <div className="todo-input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <span>{task.description}</span>
            <div className="task-actions">
              <button onClick={() => toggleComplete(index)}>
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => removeTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
