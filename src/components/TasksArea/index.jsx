import React, { useContext } from 'react'
import Tasks from '../Tasks/index'
import { TasksContext } from '../../context/tasksContext'
import { getTasks } from '../../utils/localStorage'
import './style.css'

function TasksArea() {
  const setTasks = useContext(TasksContext)[1]

  const showFinishedTasks = () => {
    const finishedTasks = getTasks('finished-tasks')
    setTasks(['finishedTasks', finishedTasks])
  }

  const showActiveTasks = () => {
    const activeTasks = getTasks('tasks')
    setTasks(['activeTasks', activeTasks])
  }

  return (
    <div id="tasks-area">
      <div id="buttons">
        <button onClick={showActiveTasks}>Ativas</button>
        <button>Todas</button>
        <button onClick={showFinishedTasks}>Finalizadas</button>
      </div>

      <Tasks />
    </div>
  )
}

export default TasksArea