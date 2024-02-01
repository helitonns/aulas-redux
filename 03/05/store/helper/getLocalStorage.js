function getLocalStorage(key, initial){
  try {
    const result = JSON.parse(window.localStorage.getItem(key)); 
    return result !== null ? result : initial;
  } catch (error) {
    return initial;
  }
}

export default getLocalStorage;