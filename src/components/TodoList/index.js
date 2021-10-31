import React, { useState } from "react";
import TodoItem from "../TodoItem";
import "./styles.css";

function TodoList(props) {
  const { todos, handleUpdateTask, handleRemoveOneTask, handleTaskCheckbox } = props;
  return (
    <div className="todolist-box">
      {todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            position={index}
            handleUpdateTask={handleUpdateTask}
            handleRemoveOneTask={handleRemoveOneTask}
            handleTaskCheckbox={handleTaskCheckbox}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
