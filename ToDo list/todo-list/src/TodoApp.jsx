import React, { useReducer, useState } from 'react';
import './TodoApp.css'; 

const todoreducer = (tasks, action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      return [...tasks, { id: Date.now(), name: action.taskInput, dateTime: action.dateTime, completed: false }];
    
    case 'REMOVE_ITEM':
      return tasks.filter(task => task.id !== action.id);
    
    case 'TOGGLE_COMPLETE':
      return tasks.map(task => 
        task.id === action.id ? { ...task, completed: !task.completed } : task
      );
    
    default:
      return tasks;
  }
};

const TodoApp = () => {

  const [tasks, dispatch] = useReducer(todoreducer, []);

  const [taskInput, setTaskInput] = useState('');
  const [dateTimeInput, setDateTimeInput] = useState('');

  const addTask = (e) => {
    e.preventDefault();

    if (taskInput && dateTimeInput) {
      dispatch({
        type: 'ADD_ITEM',
        taskInput: taskInput,
        dateTime: dateTimeInput,
      });
      setTaskInput('');
      setDateTimeInput('');
    }
  };

  const deleteTask = (id) => {
    dispatch({ type: 'REMOVE_ITEM', id: id });
  };

  const toggleCompleted = (id) => {
    dispatch({ type: 'TOGGLE_COMPLETE', id: id });
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
          placeholder="Add something to your list"
          required
        />
        <button type="submit" className="btn add-task-btn">Add</button>
      </form>
      <ul id="taskList">
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span>{task.name}</span>
            <span>{new Date(task.dateTime).toLocaleString()}</span>
            <button onClick={() => toggleCompleted(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
