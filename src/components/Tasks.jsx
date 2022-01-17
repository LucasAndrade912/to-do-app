import React from 'react'
import Task from './Task'

function Tasks(props) {
  const { tasks } = props

  return (
    <div id="tasks">
      { tasks.map((task, index) => <Task name={task} key={index} />) }
    </div>
  )
}

export default Tasks