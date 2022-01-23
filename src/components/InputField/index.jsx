import React, { useState } from 'react'
import { saveTasksInLocalStorage } from '../../utils/localStorage'
import './style.css'

function InputField(props) {
  const { tasks, setTasks } = props
  const [task, setTask] = useState('')

  const handleTask = event => setTask(event.target.value)

  const addTask = () => {
    try {
      validateField()

      let newArray = [ ...tasks ]
      newArray.push(task)
  
      setTask('')
      saveTasksInLocalStorage('tasks', newArray)
      setTasks(newArray) 
    } catch (error) {
      alert(error.message)
    }
  }

  const validateField = () => {
    if (task.trim() === '') throw new Error('Por favor, preencha o campo de entrada')
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