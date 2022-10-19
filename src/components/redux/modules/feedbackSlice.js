import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  feedbacks: [
    { 
      todoId:0,
      id: 0,
      name:"",
      feedback: "",
    },
  ],
};

const feedbackSlice = createSlice({
    name: "feedback",
    initialState,
    reducers: {
        addFeedback: (state, action) => {
            console.log(action);
            state.feedbacks.push(action.payload)
        },

        removeFeedback: (state, action) => {
            state.feedbacks.filter((feedback) => feedback.id !== action.payload);
        },
    }
})

export const { addFeedback, removeFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;