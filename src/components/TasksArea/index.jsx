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

  const showAllTasks = () => {
    // pegar tasks ativas
    const activeTasks = getTasks('tasks')
    // pegar tasks concluidas
    const finishedTasks = getTasks('finished-tasks')
    // juntar elas em um novo array
    const allTasks = activeTasks.concat(finishedTasks)
    // mostrar na tela
    setTasks(['all', allTasks])
  }

  return (
    <div id="tasks-area">
      <div id="buttons">
        <button onClick={showActiveTasks}>Ativas</button>
        <button onClick={showAllTasks}>Todas</button>
        <button onClick={showFinishedTasks}>Finalizadas</button>
      </div>

      <Tasks />
    </div>
  )
}

export default TasksArea