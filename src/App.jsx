import { Fragment } from 'react'

function App() {
  return (
    <Fragment>
      <h1>To-do list</h1>

      <div id="input-field">
        <label htmlFor="input-task">Adicionar tarefa</label>
        <input type="text" id="input-task" placeholder="Adicione sua tarefa" />
        <button>+</button>
      </div>

      <div className="tasks">
        <div className="task">
          <div className="task-item">
            <input type="checkbox" />
            <span>Task 1</span>
          </div>

          <button id="btn-remove-task">x</button>
        </div>

        <div className="task">
          <div className="task-item">
            <input type="checkbox" />
            <span>Task 2</span>
          </div>

          <button id="btn-remove-task">x</button>
        </div>

        <div className="task">
          <div className="task-item">
            <input type="checkbox" />
            <span>Task 3</span>
          </div>

          <button id="btn-remove-task">x</button>
        </div>
      </div>
    </Fragment>
  )
}

export default App