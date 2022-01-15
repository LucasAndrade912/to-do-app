import { Fragment } from 'react'
import InputField from './components/InputField';
import Tasks from './components/Tasks';

function App() {
  return (
    <Fragment>
      <h1>To-do list</h1>

      <InputField />
      <Tasks />
    </Fragment>
  )
}

export default App