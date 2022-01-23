import { Fragment, useState } from 'react'
import InputField from '../InputField/index';
import TasksArea from '../TasksArea/index';
import EmptyTasks from '../EmptyTasks/index';
import { TasksProvider } from '../../context/tasksContext';
import { getTasks } from '../../utils/localStorage'
import './style.css'

function App() {
  const [tasks, setTasks] = useState(getTasks() || [])
  const [finishedTasks, setFinishedTasks] = useState([])

  const contextValue = [tasks, setTasks, setFinishedTasks, finishedTasks]

  return (
    <Fragment>
      <h1>To-do list</h1>

      <InputField tasks={tasks} setTasks={setTasks} />
      {
        tasks.length === 0
          ? <EmptyTasks />
          : <TasksProvider value={contextValue}>
              <TasksArea />
            </TasksProvider>
      }
    </Fragment>
  )
}

export default App