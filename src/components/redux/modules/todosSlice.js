import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3003/todos"

const initialState = {
  todos: [],
  isLoding: false,
  error: null,
};

export const addTodo = createAsyncThunk(
  "todos/addTodo", async (payload, thunkApi) => {
    try {
      const { data } = await axios.post(BASE_URL, payload);
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
)

export const readTodos  = createAsyncThunk(
  "feedbacks/readTodos",
  async (payload, thunkApi) => {
    try {
      const { data } = await axios.get(BASE_URL);
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const removeTodo = createAsyncThunk(
  "feedbacks/removeTodo",
  async (payload, thunkApi) => {
    try {
      await axios.delete(`${BASE_URL}/${payload}`);
      return thunkApi.fulfillWithValue(payload);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const editTodo = createAsyncThunk(
  "feedbacks/editTodo",
  async (payload, thunkApi) => {
    try {
      console.log(payload);
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

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [addTodo.pending]: (state) => {
      state.isLoding = true;
    },
    [addTodo.fulfilled]: (state, action) => {
      state.isLoding = false;
      state.todos.push(action.payload);
    },
    [addTodo.rejected]: (state, action) => {
      state.isLoding = false;
      state.error = action.payload;
    },
    [readTodos.pending]: (state) => {
      state.isLoding = true;
    },
    [readTodos.fulfilled]: (state, action) => {
      state.isLoding = false;
      state.todos = action.payload;
    },
    [readTodos.rejected]: (state, action) => {
      state.isLoding = false;
      state.error = action.payload;
    },
    [removeTodo.pending]: (state) => {
      state.isLoding = true;
    },
    [removeTodo.fulfilled]: (state, action) => {
      state.isLoding = false;
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
    },
    [removeTodo.rejected]: (state, action) => {
      state.isLoding = false;
      state.error = action.payload;
    },
    [editTodo.pending]: (state) => {
      state.isLoding = true;
    },
    [editTodo.fulfilled]: (state, action) => {
      state.isLoding = false;
      const target = state.todos.findIndex(todo => todo.id === action.payload.id);
      /* state.feedbacks.splice(target, 1, action.payload); */
      state.todos[target]= action.payload
    },
    [editTodo.rejected]: (state, action) => {
      state.isLoding = false;
      state.error = action.payload;
    },
  },
});

/* export const { addTodo, removeTodo, editTodo, getId } = todosSlice.actions;  */
export default todosSlice.reducer;






  /* addTodo: (state, action) => {
      state.todos.push(action.payload);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    editTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      });
    },

    getId: (state, action) => {
      state.todos.find((todo) => {
        return todo.id === action.payload;
      });
    },*/