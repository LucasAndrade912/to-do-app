export const saveTasksInLocalStorage = (key, tasksArray) => {
  localStorage.setItem(key, JSON.stringify(tasksArray))
}

export const getTasks = () => JSON.parse(localStorage.getItem('tasks'))