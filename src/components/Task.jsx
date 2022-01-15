import React from 'react'

function Task(props) {
  return (
    <div className="task">
      <div className="task-item">
        <input type="checkbox" />
        <span>{props.name}</span>
      </div>

      <button id="btn-remove-task">x</button>
    </div>
  )
}

export default Task