import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: Date.now(),
      name: "이름입니다",
      title: "제목입니다",
      content: "내용입니다",
      done: false,
    },
  ],
};


const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload)
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
    },
  },
});
console.log(todosSlice);
export const { addTodo, removeTodo, editTodo, getId } = todosSlice.actions;
export default todosSlice.reducer;

// switch (action.type) {
//   case ADD_TODO:
//     return { ...state, todos: [...state.todos, action.payload] };

//   case REMOVE_TODO:
//     return {
//       ...state,
//       todos: state.todos.filter((todo) => todo.id !== action.payload),
//     };

//   case EDIT_TODO:
//     return {
//       ...state,
//       todos: state.todos.map((todo) => {
//         if (todo.id === action.payload) {
//           return { ...todo, done: !todo.done };
//         } else {
//           return todo;
//         }
//       }),
//     };

//   case DETAIL_MATCHING_ID:
//     return {
//       ...state,
//   todo: state.todos.find((todo) => {
//     return todo.id === action.payload;
//   }),
// };

//   default:
//     return state;
// }
