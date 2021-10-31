import React, { useState } from "react";
import UpdatedTask from "../UpdatedTask";
import "./styles.css";

function TodoItem(props) {
  const {
    todo,
    handleUpdateTask,
    position,
    handleRemoveOneTask,
    handleTaskCheckbox,
  } = props;
  const { taskName, isChecked } = todo;
  const [isHideDetail, setIsHideDetail] = useState(true);

  const handleDetailClick = () => {
    setIsHideDetail(!isHideDetail);
  };
  const handleTaskRemove = () => {
    handleRemoveOneTask(position);
  };
  const handleTaskCheckChange = () => {
    handleTaskCheckbox(position);
  }

  console.log(isChecked)

  return (
    <>
      <div className="item-box">
        <div className="left-box">
          <input type="checkbox" checked={isChecked} onChange={handleTaskCheckChange} />
          <span>{taskName}</span>
        </div>
        <div className="right-box">
          <div className="detail-btn" onClick={handleDetailClick}>
            Detail
          </div>
          <div className="remove-btn" onClick={handleTaskRemove}>
            Remove
          </div>
        </div>
      </div>
      {!isHideDetail && (
        <div className="detail-box">
          <UpdatedTask
            todo={todo}
            position={position}
            handleUpdateTask={handleUpdateTask}
          />
        </div>
      )}
    </>
  );
}

export default TodoItem;
