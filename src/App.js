import React, { useState } from "react";
import "./App.css";
import NewTask from "./components/NewTask";
import TodoList from "./components/TodoList";
import BulkActions from "./components/BulkActions";

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddNewTask = (newTask) => {
    const newTodos = [...todos, newTask];
    setTodos(newTodos);
  };

  const handleRemoveOneTask = (position) => {
    let newTodos = [...todos];
    newTodos = newTodos.filter((todo, index) => index !== position);
    setTodos(newTodos);
  };

  const handleUpdateTask = (updatedTask, position) => {
    let newTodos = [...todos];
    newTodos = newTodos.map((todo, index) => {
      if (index === position) {
        return updatedTask;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleTaskCheckbox = (position) => {
    let newTodos = [...todos];
    newTodos = newTodos.map((todo, index) => {
      if (index === position) {
        return { ...todo, isChecked: !todo.isChecked };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleRemoteTask = () => {
    let newTodos = [...todos];
    newTodos = newTodos.filter((todo, index) => !todo.isChecked);
    console.log(newTodos)
    setTodos(newTodos);
  };

  const isShowBulkAction = todos.some((todo, index) => todo.isChecked);

  return (
    <div className="app-container">
      <div className="new-task-container">
        <NewTask
          handleAddNewTask={handleAddNewTask}
          handleRemoveOneTask={handleRemoveOneTask}
        />
      </div>
      <div className="todolist-container">
        <TodoList
          todos={todos}
          handleUpdateTask={handleUpdateTask}
          handleRemoveOneTask={handleRemoveOneTask}
          handleTaskCheckbox={handleTaskCheckbox}
        />
        {isShowBulkAction && (
          <BulkActions handleRemoteTask={handleRemoteTask} />
        )}
      </div>
    </div>
  );
}

export default App;
