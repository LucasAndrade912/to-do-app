import React from 'react'
import { saveTasksInLocalStorage } from '../utils/localStorage'

function Task(props) {
  const {
    name,
    id,
    tasks,
    setTasks,
    finishedTasks,
    setFinishedTasks
  } = props

  const removeTask = () => {
    let newArray = [ ...tasks ]
    newArray.splice(id, 1)

    saveTasksInLocalStorage('tasks', newArray)
    setTasks(newArray)
  }

  const saveFinishedTasks = () => {
    let newArrayFinishedTasks = [ ...finishedTasks ]
    newArrayFinishedTasks.push(name)
    setFinishedTasks(newArrayFinishedTasks)
    saveTasksInLocalStorage('finished-tasks', newArrayFinishedTasks)
  }

  const finishTask = () => {
    let newArray = [ ...tasks ]
    newArray.splice(id, 1)

    saveTasksInLocalStorage('tasks', newArray)
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

      <button id="btn-remove-task" onClick={removeTask}>x</button>
    </div>
  )
}

export default Task