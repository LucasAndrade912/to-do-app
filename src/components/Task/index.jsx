import { useContext, useState, useEffect } from 'react'
import { TasksContext } from '../../context/tasksContext'
import { saveTasksInLocalStorage } from '../../utils/localStorage'
import './style.css'

function Task({ id, taskName, type, tasksType }) {
  const [isChecked, setIsChecked] = useState(false)
  const [updatedTasks, setUpdatedTasks] = useState([])
  const [updated, setUpdated] = useState(false)

  const [
    tasks,
    setTasks,
    activeTasks,
    setActiveTasks,
    setFinishedTasks,
    finishedTasks,
  ] = useContext(TasksContext)

  const removeTask = () => {
    let key, state, setState = null

    if (tasks[0] === 'activeTasks') {
      key = 'tasks'
      state = activeTasks
      setState = setActiveTasks
    } else {
      key = 'finished-tasks'
      state = finishedTasks
      setState = setFinishedTasks
    }

    let newArray = [ ...state ]
    newArray.splice(id, 1)

    saveTasksInLocalStorage(key, newArray)
    setTasks([tasks[0], newArray])
    setState(newArray)
  }

  const saveFinishedTasks = () => {
    let newArrayFinishedTasks = [ ...finishedTasks ]
    newArrayFinishedTasks.push({ type: 'finished', taskName: taskName })
    setFinishedTasks(newArrayFinishedTasks)
    saveTasksInLocalStorage('finished-tasks', newArrayFinishedTasks)
  }

  const finishTask = () => {
    if (type !== 'finished' && tasksType !== 'all') {
      let newArray = [ ...activeTasks ]
      newArray.splice(id, 1)

      saveTasksInLocalStorage('tasks', newArray)
      setActiveTasks(newArray)
      saveFinishedTasks()
    }
  }

  const handleUpdateTask = event => {
    const { textContent } = event.currentTarget

    const updatedArray = activeTasks.map((activeTask, index) => {
      if (index === id) {
        activeTask.taskName = textContent
      }
      
      return activeTask
    })

    setUpdatedTasks(updatedArray)
    setUpdated(true)
  }

  const updateTask = () => {
    if (updated) {
      setActiveTasks(updatedTasks)
      saveTasksInLocalStorage('tasks', updatedTasks)
    }
  }

  useEffect(() => {
    if (type === 'finished') {
      setIsChecked(true)
    } else {
      setIsChecked(false)
    }
  }, [type])

  return (
    <div className="task">
      <div className="task-item">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={finishTask}
        />
        <span className="checkmark"></span>
        <label
          contentEditable={tasks[0] === 'activeTasks'}
          suppressContentEditableWarning
          onInput={handleUpdateTask}
          onBlur={updateTask}
        >
          {taskName}
        </label>
      </div>

      <button
        id="btn-remove-task"
        onClick={
          tasksType !== 'all'
            ? removeTask
            : null
        }
      >
          x
      </button>
    </div>
  )
}

export default Task