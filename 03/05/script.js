import store from "./store/configureStore.js";
import { tokenFetch } from "./store/token.js";


async function login(user){
  const state = store.getState();

  console.log(state);

  if(state.data === null){
    console.log("Executou");
    await store.dispatch(tokenFetch(user));
  }
}

login({username: 'dog', password: 'dog'});
