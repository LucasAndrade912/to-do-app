import { Fragment, useState, useEffect } from 'react'

import InputField from '../InputField/index';
import TasksArea from '../TasksArea/index';
import EmptyTasks from '../EmptyTasks/index';

import { TasksProvider } from '../../context/tasksContext';

import { getTasks, saveTheme, getTheme } from '../../utils/localStorage'

import MoonImage from '../../assets/moon.svg'
import SunImage from '../../assets/sun.svg'

import './style.css'

function App() {
  const [theme, setTheme] = useState(getTheme() || 'light')
  const [tasks, setTasks] = useState([])
  const [activeTasks, setActiveTasks] = useState(getTasks('tasks'))
  const [finishedTasks, setFinishedTasks] = useState(getTasks('finished-tasks'))

  const transformKey = key => '--' + key.replace(/([A-Z])/, '-$1').toLowerCase()

  const handleImageClick = () => {
    switch (theme) {
      case 'dark':
        setTheme('light')
        break;
    
      case 'light':
        setTheme('dark')
        break

      default:
        setTheme('light')
    }
  }

  const contextValue = [
    tasks,
    setTasks,
    activeTasks,
    setActiveTasks,
    setFinishedTasks,
    finishedTasks
  ]

  useEffect(() => {
    setTasks(['activeTasks', activeTasks])
  }, [activeTasks])

  useEffect(() => {
    const darkTheme = {
      bgColor: '#464646',
      textColor: '#FFF'
    }
  
    const lightTheme = {
      bgColor: '#F8F8F9',
      textColor: '#000'
    }
    
    const toggleTheme = themeObject => {
      const root = document.querySelector(':root')
  
      Object.keys(themeObject).forEach(key => {
        root.style.setProperty(transformKey(key), themeObject[key])
      })
    }

    saveTheme(theme)
    
    theme === 'light'
      ? toggleTheme(lightTheme)
      : toggleTheme(darkTheme)
  }, [theme])

  return (
    <Fragment>
      <header>
        <h1>To-do list</h1>

        <button onClick={handleImageClick}>
          <img src={
            theme === 'light'
              ? SunImage
              : MoonImage
          } alt="Botão para trocar de tema" />
        </button>
      </header>

      <InputField activeTasks={activeTasks} setActiveTasks={setActiveTasks} />
      {
        activeTasks.length === 0
          ? <EmptyTasks />
          : <TasksProvider value={contextValue}>
              <TasksArea />
            </TasksProvider>
      }
    </Fragment>
  )
}

export default App