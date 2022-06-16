export const getLocalStorageValue = (key) => {
    return JSON.parse(localStorage.getItem(key))
  }
  
  export const saveLocalStorageValues = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  }
  
  export const removeLocalStorageValue = (key) => {
    localStorage.removeItem(key)
  }