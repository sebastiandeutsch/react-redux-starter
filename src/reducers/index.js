import { combineReducers } from 'redux';
import app                 from 'reducers/app';
import books               from 'reducers/books';

const rootReducer = combineReducers({
  app,
  books
});

export default rootReducer;
