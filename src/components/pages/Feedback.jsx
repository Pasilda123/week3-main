import React from "react";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addFeedback, removeFeedback } from '../redux/modules/feedbackSlice';

const FeedbackList = ({todoId}) => {
    const dispatch = useDispatch();
    const {feedbacks} = useSelector((state)=>state.feedback);
    const feed = feedbacks.filter((feed)=>feed.todoId === +todoId);

    const [input, setInput] = useState({
        id:Date.now(),
        name:"",
        feedback:"",
    })

    const onChange = (e) => {
        const { name, value } = e.target;
        setInput({...input, [name]: value }); 
    };

    const DeleteTodo = (id) => {
        dispatch(removeFeedback(id));
      };

    const onCreate = (e) => {
        e.preventDefault();
        if(input.name === "" || input.feedback === "") {
            return window.alert("이름을 입력해주세요!"); 
        } 
        dispatch(addFeedback({...input, todoId,}));
        setInput({name:"", feedback:""});
        }

    return (
        <div>
            <input type="text" name="name" onChange={onChange}/>
            <input type="text" name="feedback" onChange={onChange}/>
            <button onClick={onCreate}>추가</button>
            {feedbacks.filter((feed)=>feed.todoId== +todoId).map((feed)=>{
                return (
                    <div key={feed.id}>
                        <div>
                        작성자 : {feed.name}
                        피드백 : {feed.feedback}
                        </div>
                        <button onClick={()=>{DeleteTodo(feed.id)}}>삭제</button>
                    </div>
                )
            })}
        </div>
    );
};


export default FeedbackList;
