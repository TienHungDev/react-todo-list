import React, { useState } from 'react';
import './styles.css';

function BulkActions(props) {
  const {handleRemoteTask} = props;

  return (
    <div className="bulkactions-box">
        <div className="left-box">Bulk Actions:</div>
        <div className="right-box">
          <div className="done-btn">Done</div>
          <div className="remove-all-btn" onClick={handleRemoteTask}>Remove</div>
        </div>
    </div>
  );
}

export default BulkActions;
