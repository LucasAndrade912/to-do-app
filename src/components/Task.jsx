import { useContext } from 'react'
import { TasksContext } from '../context/tasksContext'
import { saveTasksInLocalStorage } from '../utils/localStorage'

function Task({ id, taskName, tasks }) {
  const [setTasks, setFinishedTasks, finishedTasks] = useContext(TasksContext)

  const removeTask = () => {
    let newArray = [ ...tasks ]
    newArray.splice(id, 1)

    saveTasksInLocalStorage('tasks', newArray)
    setTasks(newArray)
  }

  const saveFinishedTasks = () => {
    let newArrayFinishedTasks = [ ...finishedTasks ]
    newArrayFinishedTasks.push(taskName)
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
        {taskName}
        <input type="checkbox" onClick={finishTask} />
        <span className="checkmark"></span>
      </label>

      <button id="btn-remove-task" onClick={removeTask}>x</button>
    </div>
  )
}

export default Task