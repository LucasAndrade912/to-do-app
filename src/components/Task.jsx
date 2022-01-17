import React from 'react'

function Task(props) {
  return (
    <div className="task">
      <label className="task-item">
        {props.name}
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>

      <button id="btn-remove-task">x</button>
    </div>
  )
}

export default Task