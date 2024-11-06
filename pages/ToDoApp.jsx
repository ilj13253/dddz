import { useState } from 'react';
import './ToDoApp.module.css'; // Optional CSS file for styling

function ToDoApp() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Add a new task
  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  // Toggle task completion
  const toggleCompletion = (index) => {
    setTasks(tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    ));
  };

  // Remove a specific task
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Remove all completed tasks
  const removeCompletedTasks = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="ToDoApp">
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompletion(index)}
            />
            <span>{task.text}</span>
            <button onClick={() => removeTask(index)}>×</button>
          </li>
        ))}
      </ul>
      {tasks.some(task => task.completed) && (
        <button onClick={removeCompletedTasks}>Удалить задачу</button>
      )}
    </div>
  );
}

export default ToDoApp;
