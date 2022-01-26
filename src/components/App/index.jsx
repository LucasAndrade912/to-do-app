import { Fragment, useState, useEffect } from 'react'
import InputField from '../InputField/index';
import TasksArea from '../TasksArea/index';
import EmptyTasks from '../EmptyTasks/index';
import { TasksProvider } from '../../context/tasksContext';
import { getTasks } from '../../utils/localStorage'
import './style.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [activeTasks, setActiveTasks] = useState(getTasks('tasks') || [])
  const [finishedTasks, setFinishedTasks] = useState(getTasks('finished-tasks') || [])

  console.log(tasks);

  const contextValue = [
    tasks,
    setTasks,
    activeTasks,
    setActiveTasks,
    setFinishedTasks,
    finishedTasks
  ]

  useEffect(() => {
    setTasks(['activeTasks', activeTasks])
  }, [activeTasks])

  return (
    <Fragment>
      <h1>To-do list</h1>

      <InputField activeTasks={activeTasks} setActiveTasks={setActiveTasks} />
      {
        activeTasks.length === 0
          ? <EmptyTasks />
          : <TasksProvider value={contextValue}>
              <TasksArea />
            </TasksProvider>
      }
    </Fragment>
  )
}

export default App