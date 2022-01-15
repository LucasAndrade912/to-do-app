import React from 'react'

function InputField() {
  return (
    <div id="input-field">
      <label htmlFor="input-task">Adicionar tarefa</label>
      <input type="text" id="input-task" placeholder="Adicione sua tarefa" />
      <button>+</button>
    </div>
  )
}

export default InputField