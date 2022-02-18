import React from 'react'

import Task from '../Task'

import './style.css'

function Tasks({ selectedTasks }) {
  return (
    <div id="tasks">
      {
        selectedTasks.map(({ id, task, finished }) => (
          <Task
            key={id}
            id={id}
            task={task}
            finished={finished}
          />
        ))
      }
    </div>
  )
}

export default Tasks