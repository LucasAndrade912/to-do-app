import { Fragment, useState } from 'react'
import InputField from './components/InputField';
import Tasks from './components/Tasks';
import EmptyTasks from './components/EmptyTasks';

function App() {
  const [tasks, setTasks] = useState([])

  return (
    <Fragment>
      <h1>To-do list</h1>

      <InputField tasks={tasks} setTasks={setTasks} />
      {
        tasks.length === 0
          ? <EmptyTasks />
          : <Tasks tasks={tasks} />
      }
    </Fragment>
  )
}

export default App