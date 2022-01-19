export const saveTasksInLocalStorage = (tasksArray) => {
  localStorage.setItem('tasks', JSON.stringify(tasksArray))
}

export const getTasks = () => JSON.parse(localStorage.getItem('tasks'))