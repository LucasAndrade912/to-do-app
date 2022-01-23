import { useContext } from 'react'
import { TasksContext } from '../../context/tasksContext'
import Task from '../Task/index'
import './style.css'

function Tasks() {
  const [tasks] = useContext(TasksContext)

  return (
    <div id="tasks">
      {
        tasks.map((task, index) => (
          <Task
            key={index}
            id={index}
            taskName={task}
          />
        ))
      }
    </div>
  )
}

export default Tasks