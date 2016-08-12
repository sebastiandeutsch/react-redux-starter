import * as Actions from 'constants/ActionTypes';
import { browserHistory } from 'react-router';

const initialState = {
  url: '/',
  something: '',
  debug: false
};

const actionsMap = {
  /**
   * Updates something
   */
  [Actions.CHANGE_SOMETHING]: (state, action) => {
    state = { ...state };

    state.something = action.payload.something;

    return state;
  },

  /**
   * Updates the url
   */
  [Actions.UPDATE_URL]: (state, action) => {
    state = { ...state };

    browserHistory[action.payload.method](action.payload.args);

    return state;
  }
};

export default function app(state = initialState, action) {
  const reduceFn = actionsMap[ action.type ];

  if (!reduceFn) {
    return state;
  }

  return reduceFn(state, action);
}
