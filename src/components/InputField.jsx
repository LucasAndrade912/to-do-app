import React, { useState } from 'react'

function InputField(props) {
  const { tasks, setTasks } = props
  const [task, setTask] = useState('')

  const handleTask = event => setTask(event.target.value)

  const addTask = () => {
    let newArray = [ ...tasks ]
    newArray.push(task)

    setTask('')
    setTasks(newArray)
  }

  return (
    <div id="input-field">
      <label htmlFor="input-task">Adicionar tarefa</label>
      <input 
        type="text"
        id="input-task"
        placeholder="Adicione sua tarefa"
        value={task}
        onChange={handleTask}
      />
      <button onClick={addTask}>
        <span>+</span>
      </button>
    </div>
  )
}

export default InputField