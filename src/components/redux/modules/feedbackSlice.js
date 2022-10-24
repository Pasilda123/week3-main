import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3003/feedbacks";

const initialState = {
  feedbacks: [],
  isLoding: false,
  error: null,
};

export const addFeedback = createAsyncThunk(
  "feedbacks/editFeedbacks",
  async (payload, thunkApi) => {
    try {
      const { data } = await axios.post(BASE_URL, payload);
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const readFeedbacks = createAsyncThunk(
  "feedbacks/readFeedbacks",
  async (payload, thunkApi) => {
    try {
      const { data } = await axios.get(BASE_URL);
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const removeFeedback = createAsyncThunk(
  "feedbacks/removeFeedback",
  async (payload, thunkApi) => {
    try {
      await axios.delete(`${BASE_URL}/${payload}`);
      return thunkApi.fulfillWithValue(payload);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const editFeedback = createAsyncThunk(
  "feedbacks/editFeedback",
  async (payload, thunkApi) => {
    try {
      const { data } = await axios.patch(
        `${BASE_URL}/${payload.id}`,
        payload.body
      );
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

const feedbackSlice = createSlice({
  name: "feedbacks",
  initialState,
  reducers: {},
  extraReducers: {
    [addFeedback.pending]: (state) => {
      state.isLoding = true;
    },
    [addFeedback.fulfilled]: (state, action) => {
      state.isLoding = false;
      state.feedbacks.push(action.payload);
    },
    [addFeedback.rejected]: (state, action) => {
      state.isLoding = false;
      state.error = action.payload;
    },
    [readFeedbacks.pending]: (state) => {
      state.isLoding = true;
    },
    [readFeedbacks.fulfilled]: (state, action) => {
      state.isLoding = false;
      state.feedbacks = action.payload;
    },
    [readFeedbacks.rejected]: (state, action) => {
      state.isLoding = false;
      state.error = action.payload;
    },
    [removeFeedback.pending]: (state) => {
      state.isLoding = true;
    },
    [removeFeedback.fulfilled]: (state, action) => {
      state.isLoding = false;
      state.feedbacks = state.feedbacks.filter(
        (feedback) => feedback.id !== action.payload
      );
    },
    [removeFeedback.rejected]: (state, action) => {
      state.isLoding = false;
      state.error = action.payload;
    },
    [editFeedback.pending]: (state) => {
      state.isLoding = true;
    },
    [editFeedback.fulfilled]: (state, action) => {
      state.isLoding = false;
      const target = state.feedbacks.findIndex(feedback => feedback.id === action.payload.id);
      /* state.feedbacks.splice(target, 1, action.payload); */
      
      state.feedbacks[target]= action.payload
    },
    [editFeedback.rejected]: (state, action) => {
      state.isLoding = false;
      state.error = action.payload;
    },
  },
});

export default feedbackSlice.reducer;

/* const feedbackSlice = createSlice({
    name: "feedback",
    initialState,
    reducers: {
        editFeedback: (state, action) => {
            state.feedbacks.push(action.payload)
        },

        removeFeedback: (state, action) => {
            console.log(action)
            state.feedbacks = state.feedbacks.filter((feedback) => feedback.todoId !== action.payload);
            console.log(state.feedbacks)
        },

        
    }
}) */

/* export const { editFeedback, removeFeedback } = feedbackSlice.actions; */
