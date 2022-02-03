import { useContext } from 'react'
import { TasksContext } from '../../context/tasksContext'
import Task from '../Task/index'
import EmptyTasks from '../EmptyTasks'
import './style.css'

function Tasks() {
  const [tasks] = useContext(TasksContext)

  if (tasks.length === 0 || tasks[1].length === 0) return <EmptyTasks />

  return (
    <div id="tasks">
      {
        tasks[1].map((task, index) => (
          <Task
            key={index}
            id={index}
            taskName={task.taskName}
            type={task.type}
            tasksType={tasks[0]}
          />
        ))
      }
    </div>
  )
}

export default Tasks