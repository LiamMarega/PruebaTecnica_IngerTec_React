const initialState = {
  conejo: 0,
  elefante: 0,
  gallo: 0,
  leon: 0,
  panda: 0,
  texto: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
      
    case "elefante":
      return {
        ...state,
        elefante: state.elefante + 1,
      };

    case "gallo":
      return {
        ...state,
        gallo: state.gallo + 1,
      };

    case "leon":
      return {
        ...state,
        leon: state.leon + 1,
      };

    case "panda":
      return {
        ...state,
        panda: state.panda + 1,
      };

      case "conejo":

      return {
        ...state,
        conejo: state.conejo + 1,
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

