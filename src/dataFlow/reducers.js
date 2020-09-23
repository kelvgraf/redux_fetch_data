import {
  GET_CHAMP_STARTED,
  GET_CHAMP_SUCESS,
  GET_CHAMP_FAILURE
} from "./actions";

const INITIAL_STATE = {
  loading: false,
  payload: undefined,
  selectedChamp: null,
  err: null
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CHAMP_STARTED:
      return {
        ...state,
        loading: true
      };

    case GET_CHAMP_SUCESS:
      return {
        ...state,
        loading: false,
        selectedChamp: action.selectedChamp,
        payload: {
          ...action.payload,
        }
      };

    case GET_CHAMP_FAILURE:
      return {
        ...state,
        loading: false,
        err: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
