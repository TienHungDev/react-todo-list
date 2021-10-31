import React, { useState } from "react";
import "./styles.css";

function NewTask(props) {
  const { handleAddNewTask } = props;

  const today = (function () {
    const now = new Date();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    return `${now.getFullYear()}-${month}-${day}`;
  })();

  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(today);
  const [priority, setPriority] = useState("normal");
  const [isShowRequired, setIsShowRequired] = useState(false);

  const handleTaskNameChange = (e) => {
    setIsShowRequired(false);
    setTaskName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleAddTaskClick = () => {
    if (taskName.trim() === '') {
      setIsShowRequired(true);
      return;
    }
    const newTask = {
      taskName,
      description,
      dueDate,
      priority,
    };
    console.log(newTask);
    handleAddNewTask(newTask);
  };

  return (
    <div className="new-task-box">
      <div className="title">New Task</div>
      <input
        placeholder="Add new task ..."
        className="new-task-input"
        value={taskName}
        onChange={handleTaskNameChange}
      />
      {isShowRequired && <p className="required-text">Required field!</p>}
      <p className="task-label">Description</p>
      <textarea
        className="description-text-area"
        value={description}
        onChange={handleDescriptionChange}
      />
      <div className="date-priority-box">
        <div className="date-box">
          <p className="task-label">Due Date</p>
          <input type="date" value={dueDate} onChange={handleDueDateChange} />
        </div>
        <div className="priority-box">
          <p className="task-label">Priority</p>
          <select
            name="priority"
            className="priority-select"
            onChange={handlePriorityChange}
            value={priority}
          >
            <option value="low">Low</option>
            <option value="normal">Normal</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>
      <div className="add-button" onClick={handleAddTaskClick}>
        Add
      </div>
    </div>
  );
}

export default NewTask;
