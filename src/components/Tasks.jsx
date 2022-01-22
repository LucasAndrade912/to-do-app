import React from 'react'
import Task from './Task'

function Tasks({ tasks }) {
  return (
    <div id="tasks">
      {
        tasks.map((task, index) => (
          <Task
            key={index}
            id={index}
            taskName={task}
            tasks={tasks}
          />
        ))
      }
    </div>
  )
}

export default Tasks