import React, { useState } from 'react';
import './TodoApp.css'; 

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [dateTimeInput, setDateTimeInput] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (taskInput && dateTimeInput) {
      setTasks([...tasks, { id: Date.now(), name: taskInput, dateTime: dateTimeInput, completed: false }]);
      setTaskInput('');
      setDateTimeInput('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  return (
    <div className="todo-app">
      <h1>To-Do App</h1>
      <form className="input-group" onSubmit={addTask}>
        <input
          type="datetime-local"
          value={dateTimeInput}
          onChange={(e) => setDateTimeInput(e.target.value)}
          required
        />
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a task"
          required
        />
        <button type="submit" className="btn add-task-btn">Add Task</button>
      </form>
      <ul id="taskList">
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span>{task.name}</span>
            <span>{new Date(task.dateTime).toLocaleString()}</span>
            <button onClick={() => toggleCompleted(task.id)}>Complete</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
