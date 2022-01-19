import React from 'react'
import Task from './Task'

function Tasks(props) {
  const {
    tasks,
    setTasks,
    finishedTasks,
    setFinishedTasks
  } = props

  return (
    <div id="tasks">
      {
        tasks.map((task, index) => (
          <Task
            key={index}
            name={task}
            id={index}
            tasks={tasks}
            setTasks={setTasks}
            finishedTasks={finishedTasks}
            setFinishedTasks={setFinishedTasks}
          />
        ))
      }
    </div>
  )
}

export default Tasks