import * as actionTypes from './actionTypes';

const initialState = {
  todos: {},
  loading: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_LOADING_TODO:
      return Object.assign(
        {},
        state,
        { loading: true }
      );
    case actionTypes.FETCH_SUCCESS_TODO:
      return Object.assign(
        {},
        state,
        {
          todos: action.todos,
          loading: false
        }
      );

    default:
      return state
  }
};

export default reducer;
