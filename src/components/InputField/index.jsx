import React, { useState } from 'react'
import { saveInLocalStorage } from '../../utils/localStorage'
import './style.css'

function InputField({ todos, setTodos }) {
  const [task, setTask] = useState('')

  const handleTask = event => setTask(event.target.value)

  const addTask = () => {
    try {
      validateField()

      let copyTodos = [ ...todos ]

      if (copyTodos.length === 0) {
        copyTodos.push({ id: 1, task, finished: false })
      } else {
        const newId = copyTodos[copyTodos.length - 1].id + 1
        copyTodos.push({ id: newId, task, finished: false })
      }

      setTask('')
      setTodos(copyTodos)
      saveInLocalStorage('todos', copyTodos)
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
        autoComplete="off"
      />
      <button onClick={addTask}>
        <span>+</span>
      </button>
    </div>
  )
}

export default InputField