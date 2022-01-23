import React from 'react'
import Tasks from '../Tasks/index'
import './style.css'

function TasksArea() {
  return (
    <div id="tasks-area">
      <div id="buttons">
        <button>Ativas</button>
        <button>Todas</button>
        <button>Finalizadas</button>
      </div>

      <Tasks />
    </div>
  )
}

export default TasksArea