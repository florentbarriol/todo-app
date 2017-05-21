import { combineReducers } from 'redux';
import todo from './features/todo';

export default combineReducers({
  todo: todo.reducer
});
