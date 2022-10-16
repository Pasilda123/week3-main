//Action Value
const ADD_TODO = "TODOS/ADD_TODO";
const REMOVE_TODO = "TODOS/REMOVE_TODO";
const EDIT_TODO = "TODOS/EDIT_TODO";
const CHANGE_REMAINING_TODO = "TODOS/CHANGE_REMAINING_TODO"
const DETAIL_MATCHING_ID = "TODOS/DETAIL_GET_ID";


// Action Creator
export const addTodo = (payload) => {
    return { type: ADD_TODO, payload };
  };
  
  export const removeTodo = (payload) => {
    return { type: REMOVE_TODO, payload };
  };
  
  export const editTodo = (payload) => {
    return { type: EDIT_TODO, payload };
  };

  export const remainingTodo = (payload) => {
    return { type: CHANGE_REMAINING_TODO, payload}
  }
  
  export const getId = (payload) => {
    return { type: DETAIL_MATCHING_ID, payload };
  };
  
  // initial State
  const initialState = {
    todos: [
      { id: 1, name:"A", title: "와이어프레임 만들기", content: "ABC", done: true },
      { id: 2, name:"B", title: "롤 부여하기", content: "ABC", done: true },
      { id: 3, name:"C", title: "VSCODE 설치", content: "ABC", done: false },
      { id: 4, name:"D", title: "yarn create react-app week3", content: "ABC", done: false },
      { id: 5, name:"E", title: "yarn add redux react-redux", content: "ABC", done: false },
      { id: 6, name:"F", title: "yarn add styled-components", content: "ABC", done: false },
      { id: 7, name:"G", title: "yarn add react-router-dom", content: "ABC", done: false },
      { id: 8, name:"H", title: "yarn add react-icons", content: "ABC", done: false },
      { id: 9, name:"I", title: "yarn add react-redux @reduxjs/toolkit", content: "ABC", done: false },
    ],
  };
  
  // Reducer
  const todos = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return { ...state, todos: [...state.todos, action.payload] };
  
      case REMOVE_TODO:
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload),
        };
  
      case EDIT_TODO:
        return {
          ...state,
          todos: state.todos.map((todo) => {
            if (todo.id === action.payload) {
              return { ...todo, done: !todo.done };
            } else {
              return todo;
            }
          }),
        };

      case CHANGE_REMAINING_TODO:
        return {
          
        }

      case DETAIL_MATCHING_ID:
        return {
          ...state,
          todo: state.todos.find((todo) => {
            // 배열 요소 순차순회하며 조건에 일치하는 값 반환
            return todo.id === action.payload;
            // todo id를 비교해서 맞는걸 리턴
          }),
        };
  
      default:
        return state;
    }
  };
  
  export default todos;