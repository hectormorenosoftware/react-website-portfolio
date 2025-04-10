import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR,
  CHANGE_BRIGHTNESS,
} from "../../types";

const INTIAL_STATE = {
  error: false,
  loading: false,
  data: [],
  brightness: true,
};

function exampleReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_BRIGHTNESS:
      return { ...state, brightness: !state.brightness };
    case GET_DATA:
      return { error: false, loading: true, data: [] };
    case GET_DATA_SUCCESS:
      return {
        error: false,
        loading: false,
        data: [...action.payload],
      };
    case GET_DATA_ERROR:
      return { error: true, loading: false, data: [] };
    default:
      return state;
  }
}

export default exampleReducer;
