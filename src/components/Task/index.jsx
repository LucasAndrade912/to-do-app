import { useContext, useState, useEffect } from 'react'

import { TasksContext } from '../../context/tasksContext'
import { saveInLocalStorage } from '../../utils/localStorage'

import './style.css'

function Task({ id, task, finished }) {
  const [isChecked, setIsChecked] = useState(false)
  const [updatedTasks, setUpdatedTasks] = useState([])
  const [updated, setUpdated] = useState(false)

  const { todos, setTodos } = useContext(TasksContext)

  const removeTask = () => {
    let copyTodos = [ ...todos ]
    copyTodos = copyTodos.filter(task => task.id !== id)
    
    setTodos(copyTodos)
    saveInLocalStorage('todos', copyTodos)
  }

  const finishTask = () => {
    let copyTodos = [ ...todos ]
    copyTodos = copyTodos.map(task => {
      if (task.id === id) {
        task.finished = true
      }

      return task
    })

    setTodos(copyTodos)
    saveInLocalStorage('todos', copyTodos)
  }

  const handleUpdateTask = event => {
    const { textContent } = event.currentTarget

    let copyTodos = [ ...todos ]

    copyTodos = copyTodos.map(task => {
      if (task.id === id) {
        task.task = textContent
      }

      return task
    })

    setUpdated(true)
    setUpdatedTasks(copyTodos)
  }

  const updateTask = () => {
    if (updated) {
      setTodos(updatedTasks)
      saveInLocalStorage('todos', updatedTasks)
    }
  }

  useEffect(() => {
    if (finished) {
      setIsChecked(true)
    } else {
      setIsChecked(false)
    }
  }, [finished])

  return (
    <div className="task">
      <div className="task-item">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={finishTask}
        />
        <span className="checkmark"></span>
        <label
          contentEditable={!finished}
          suppressContentEditableWarning
          onInput={handleUpdateTask}
          onBlur={updateTask}
        >
          {task}
        </label>
      </div>

      <button
        id="btn-remove-task"
        onClick={removeTask}
      >
          x
      </button>
    </div>
  )
}

export default Task