import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from '../features';

export default configureStore({
  reducer: {
    todos: todosReducer,
  },
});
