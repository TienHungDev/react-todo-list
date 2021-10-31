import React, { useState, useEffect } from "react";
import "./styles.css";

function UpdatedTask(props) {
  const { handleUpdateTask, todo, position } = props;
  const { taskName, description, dueDate, priority } = todo;
  
  useEffect(() => {
    setNewTaskName(taskName);
    setNewDescription(description);
    setNewDueDate(dueDate);
    setNewPriority(priority);
  }, []);

  const [newTaskName, setNewTaskName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newDueDate, setNewDueDate] = useState('');
  const [newPriority, setNewPriority] = useState('');

  const handleTaskNameChange = (e) => {
    setNewTaskName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setNewDescription(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setNewDueDate(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setNewPriority(e.target.value);
  };

  const handleAddTaskClick = () => {
    const newTask = {
      taskName: newTaskName,
      description: newDescription,
      dueDate: newDueDate,
      priority: newPriority,
    };
    handleUpdateTask(newTask, position);
  };

  return (
    <div className="new-task-box">
      <input
        placeholder="Add new task ..."
        className="new-task-input"
        value={newTaskName}
        onChange={handleTaskNameChange}
      />
      <p>Description</p>
      <textarea
        className="description-text-area"
        value={newDescription}
        onChange={handleDescriptionChange}
      />
      <div className="date-priority-box">
        <div className="date-box">
          <p>Due Date</p>
          <input
            type="date"
            value={newDueDate}
            onChange={handleDueDateChange}
          />
        </div>
        <div className="priority-box">
          <p>Priority</p>
          <select
            name="priority"
            className="priority-select"
            onChange={handlePriorityChange}
            value={newPriority}
          >
            <option value="low">Low</option>
            <option value="normal">Normal</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>
      <div className="add-button" onClick={handleAddTaskClick}>
        Update
      </div>
    </div>
  );
}

export default UpdatedTask;
