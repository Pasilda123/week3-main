import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  feedbacks: [
  ],
};

const feedbackSlice = createSlice({
    name: "feedback",
    initialState,
    reducers: {
        addFeedback: (state, action) => {
            state.feedbacks.push(action.payload)
        },

        removeFeedback: (state, action) => {
            console.log(action)
            state.feedbacks = state.feedbacks.filter((feedback) => feedback.todoId !== action.payload);
            console.log(state.feedbacks)
        },

        
    }
})

export const { addFeedback, removeFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;