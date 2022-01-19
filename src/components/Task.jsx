import React from 'react'

function Task(props) {
  const {
    name,
    id,
    tasks,
    setTasks,
    finishedTasks,
    setFinishedTasks
  } = props

  const saveFinishedTasks = () => {
    let newArrayFinishedTasks = [ ...finishedTasks ]
    newArrayFinishedTasks.push(name)
    setFinishedTasks(newArrayFinishedTasks)
  }

  const finishTask = () => {
    let newArray = [ ...tasks ]
    newArray.splice(id, 1)

    setTasks(newArray)
    saveFinishedTasks()
  }

  return (
    <div className="task">
      <label className="task-item">
        {name}
        <input type="checkbox" onClick={finishTask} />
        <span className="checkmark"></span>
      </label>

      <button id="btn-remove-task">x</button>
    </div>
  )
}

export default Task