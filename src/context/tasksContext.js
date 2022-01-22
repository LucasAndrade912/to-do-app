import { createContext } from 'react'

const TasksContext = createContext()

const TasksProvider = TasksContext.Provider

export { TasksContext, TasksProvider }