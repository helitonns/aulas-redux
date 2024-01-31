const INCREMENTAR_TEMPO = "aluno/INCREMENTAR_TEMPO";
const REDUZIR_TEMPO = "aluno/REDUZIR_TEMPO";
const MODIFICAR_EMAIL = "aluno/MODIFICAR_EMAIL";

export const incrementarTempo = ()=> ({type: INCREMENTAR_TEMPO});
export const reduzirTempo = ()=> ({type: REDUZIR_TEMPO});
export const modificarEmail = (id)=> ({type: MODIFICAR_EMAIL, payload: id});

const initialState = {
  nome: "Alfa gama",
  email: "alfa@mail.com",
  diasRestante: 120
};

const reducer = immer.produce((state, action) => {
  switch(action.type) {
    case INCREMENTAR_TEMPO:
      state.diasRestante++;
      break;
    case REDUZIR_TEMPO:
      state.diasRestante--;
      break;
    case MODIFICAR_EMAIL:
      state.email = action.payload;
      break;
  }
}, initialState);

export default reducer;