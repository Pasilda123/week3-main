/* eslint-disable */
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeedback, removeFeedback } from "../redux/modules/feedbackSlice";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { MdPlaylistAdd } from "react-icons/md";
import Feedbackfix from './Feedbackfix';


const FeedbackList = ({ todoId }) => {
  const dispatch = useDispatch();
  const { feedbacks } = useSelector((state) => state.feedback);
  feedbacks.filter((feed) => feed.todoId == todoId);

  const [input, setInput] = useState({
    id: Date.now(),
    name: "",
    feedback: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onCreate = (e) => {
    e.preventDefault();
    if (input.name == "" || input.feedback == "") {
      return window.alert("모두 입력해주세요!");
    }
    dispatch(addFeedback({ ...input, todoId }));
    setInput({ id:Date.now(), name: "", feedback: "" });
  };


  return (
    <StyleFeedbackGroup>
      <InputContainer>
        <TextField
          style={{ width: "200px" }}
          inputProps={{ maxLength: "10" }}
          color="success"
          id="outlined-textarea"
          label="작성자"
          type="text"
          name="name"
          onChange={onChange}
          value={input.name}
          placeholder="10자 이내 입력"
          multiline
        />
        <TextField
          style={{ width: "200px" }}
          inputProps={{ maxLength: "20" }}
          color="success"
          id="outlined-textarea"
          label="내용"
          type="text"
          name="feedback"
          onChange={onChange}
          value={input.feedback}
          placeholder="20자 이내 입력"
          multiline
        />
        <AddButton onClick={onCreate}>
          <MdPlaylistAdd size="30" color="#38d9a9" />
        </AddButton>
      </InputContainer>
      <StyleContainer>
        {feedbacks
          .filter((feed) => feed.todoId === todoId)
          .map((feed, idx) => {
            return (
              <div key={idx}>
                <FeedbackContainer>
                  <Feedbackfix feed={feed}/>
                </FeedbackContainer>
              </div>
            );
          })}
      </StyleContainer>
    </StyleFeedbackGroup>
  );
};

export default FeedbackList;

const StyleFeedbackGroup = styled.div``;
const AddButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: white;
  width: auto;
  margin-left: 8%;
  margin-top: 2%;
`;

const InputContainer = styled.div`
  border-radius: 12px;
  margin-top: 10px;
  margin-left: 30px;
`;

const StyleContainer = styled.div`
  width: 500px;
  height: 300px;
  margin: auto;
  margin-left: 25px;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #ccc;
  }
`;

const FeedbackContainer = styled.div`
  margin: auto;
  margin-bottom: 5px;
  margin-top: 15px;
  height: 90px;
  align-items: center;
  width: 470px;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 10px;
`;


