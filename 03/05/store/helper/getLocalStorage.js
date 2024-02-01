function getLocalStorage(key, initial){
  try {
    console.log("passou 1");
    const result = JSON.parse(window.localStorage.getItem(key)); 
    return result !== null ? result : initial;
  } catch (error) {
    console.log("passou 2");
    return initial;
  }
}

export default getLocalStorage;