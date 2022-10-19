import { configureStore } from "@reduxjs/toolkit";
import todos from '../modules/todosSlice';
import feedback from '../modules/feedbackSlice';

const store = configureStore({
  reducer: { 
    todos, feedback
},
});

export default store;
