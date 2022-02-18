export const saveInLocalStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item))
}

export const getFromLocalStorage = key => JSON.parse(localStorage.getItem(key)) || []

export const saveTheme = theme => localStorage.setItem('theme', theme)

export const getTheme = () => localStorage.getItem('theme') || 'light'