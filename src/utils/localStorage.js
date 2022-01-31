export const saveTasksInLocalStorage = (key, tasksArray) => {
  localStorage.setItem(key, JSON.stringify(tasksArray))
}

export const getTasks = key => JSON.parse(localStorage.getItem(key)) || []