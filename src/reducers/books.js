import * as Actions from 'constants/ActionTypes';

const initialState = {
  collection: []
}

const actionsMap = {
  [Actions.SET_BOOKS]: (state, action) => {
    state = {...state};
    state.collection = action.payload.books;
    return state;
  }
}

export default function books(state = initialState, action) {
  const reducerFn = actionsMap[ action.type ];

  if(!reducerFn) {
    return state;
  }

  return reducerFn(state, action);
}
