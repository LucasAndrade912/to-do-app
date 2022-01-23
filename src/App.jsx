import { Fragment, useState } from 'react'
import InputField from './components/InputField';
import TasksArea from './components/TasksArea';
import EmptyTasks from './components/EmptyTasks';
import { TasksProvider } from './context/tasksContext';
import { getTasks } from './utils/localStorage'

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