import React, { useContext, useState, useEffect } from 'react'

import Tasks from '../Tasks'
import EmptyTasks from '../EmptyTasks'

import { TasksContext } from '../../context/tasksContext'

import './style.css'

function TasksArea() {
  const [selectedTasks, setSelectedTasks] = useState([])
  const { todos } = useContext(TasksContext)

  const showFinishedTasks = () => {
    const finishedTasks = todos.filter(task => task.finished)

    setSelectedTasks(finishedTasks)
  }

  const showActiveTasks = () => {
    const activeTasks = todos.filter(task => !task.finished)

    setSelectedTasks(activeTasks)
  }

  const showAllTasks = () => {
    setSelectedTasks(todos)
  }

  useEffect(() => {
    const activeTasks = todos.filter(task => !task.finished)

    setSelectedTasks(activeTasks)
  }, [todos])

  if (todos.length === 0) return <EmptyTasks />

  return (
    <div id="tasks-area">
      <div id="buttons">
        <button onClick={showActiveTasks}>Ativas</button>
        <button onClick={showAllTasks}>Todas</button>
        <button onClick={showFinishedTasks}>Finalizadas</button>
      </div>

      <Tasks selectedTasks={selectedTasks} />
    </div>
  )
}

export default TasksArea