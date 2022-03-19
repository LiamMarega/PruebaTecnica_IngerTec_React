const initialState = {
  conejo: JSON.parse(localStorage.getItem("conejo")) || 0,
  elefante: JSON.parse(localStorage.getItem("elefante")) || 0,
  gallo: JSON.parse(localStorage.getItem("gallo")) || 0,
  leon: JSON.parse(localStorage.getItem("leon")) || 0,
  panda: JSON.parse(localStorage.getItem("panda")) || 0,
  texto: "",
  init: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case "conejo":
      localStorage.setItem("conejo", state.conejo + 1)
      return {
        ...state,
        conejo: state.conejo + 1,
      };

    case "elefante":
      
      localStorage.setItem("elefante", state.elefante + 1)
      return {
        ...state,
        elefante: state.elefante + 1,
      };

    case "gallo":
      localStorage.setItem("gallo", state.gallo + 1)
      return {
        ...state,
        gallo: state.gallo + 1,
      };

    case "leon":
      localStorage.setItem("leon", state.leon + 1)
      return {
        ...state,
        leon: state.leon + 1,
      };

    case "panda":
      localStorage.setItem("panda", state.panda + 1)
      return {
        ...state,
        panda: state.panda + 1,
      };

    
    case "init":

      return {
        ...state,
        init: state.init + 1,
      };

    case "TEXTO":
      return {
        ...state,
        texto: action.data,
      };

    default:
      break;
  }
}
