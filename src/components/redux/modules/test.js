// // 일반 리덕스 예시 코드

// // Action Value
// const ADD_NUMBER = "ADD_NUMBER";
// const MINUS_NUMBER = "MINUS_NUMBER";

// // Action Creator
// export const addNumber = (payload) => {
//   return {
//     type: ADD_NUMBER,
//     payload,
//   };
// };

// export const minusNumber = (payload) => {
//   return {
//     type: MINUS_NUMBER,
//     payload,
//   };
// };

// // Initial State
// const initialState = {
//   number: 0,
// };

// // Reducer
// const counter = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_NUMBER:
//       return {
//         number: state.number + action.payload,
//       };

//     case MINUS_NUMBER:
//       return {
//         number: state.number - action.payload,
//       };
//     default:
//       return state;
//   }
// };

// // export default reducer
// export default counter;






// //createSlice API 뼈대

// const counterSlice = createSlice({
// 	name: '', // 이 모듈의 이름
// 	initialState : {}, // 이 모듈의 초기상태 값
// 	reducers : {}, // 이 모듈의 Reducer 로직
// })

// // counterSlice 리듀서 객체 안에서 만들어주는 함수가 
// // 리듀서의 로직이 되면서도 동시에 Action Creator가 된다는 점. 
// // 그리고 Action Value 까지 함수의 이름을 따서 자동으로 만들어짐. 
// // 그래서 우리는 Reducer만 만들어주면 됩니다. 

// // counterSlice.js의 Slice 구조

// const counterSlice = createSlice({
//     name: "counter",
//     initialState,
//     reducers: {
//       // 리듀서 안에서 만든 함수 자체가 리듀서의 로직이자, 액션크리에이터가 된다.
//       addNumber: (state, action) => {
//         state.number = state.number + action.payload;
//       },
  
//       minusNumber: (state, action) => {
//         state.number = state.number - action.payload;
//       },
//     },
//   });


//   import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
// todos:[
// {
// id:0,
// name: '',
// title: '',
// content: '',
// done: false,
// }
// ],
// };

// export const getTodos = createAsyncThunk(
// 'todos/getTodos', //액션 타입
// async (data, thunkAPI) => {
// try {
// //const res = axios.post('http://localhost:3001/todos',data={id:0,title: '',body: '',isDone: false,}) 
// C / axios.get('http://localhost:3001/todos') // 데이터 생성(전송)
// R / axios.patch('http://localhost:3001/todos/{id}', data={title:"", body:""}) // 해당 데이터 요청
// U / axios.delete('http://localhost:3001/todos/{id}') // 데이터 수정
// return thunkAPI.fullfilWithValue(res);
// } catch (err) {
// return thunkAPI.rejectWithValue(err.message);
// }
// }
// );

// const todoSlice = createSlice({
// name: 'todos',
// initialState,
// reducers: {},
// extraReducers: {
// [getTodos.fulfilled] : (state, action) => {
// state.todos = action.payload;
// },
// },
// });

// export default todoSlice.reducer;