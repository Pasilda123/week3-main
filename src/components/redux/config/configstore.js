import { configureStore } from "@reduxjs/toolkit";
import todos from '../modules/todosSlice';
import feedbacks from '../modules/feedbackSlice';

const store = configureStore({
  reducer: { 
    todos, feedbacks
},
});

export default store;
