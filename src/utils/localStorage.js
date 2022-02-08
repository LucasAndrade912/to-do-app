export const saveTasksInLocalStorage = (key, tasksArray) => {
  localStorage.setItem(key, JSON.stringify(tasksArray))
}

export const getTasks = key => JSON.parse(localStorage.getItem(key)) || []

export const saveTheme = theme => localStorage.setItem('theme', theme)

export const getTheme = () => localStorage.getItem('theme')