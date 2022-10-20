/* eslint-disable */
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeedback, removeFeedback } from "../redux/modules/feedbackSlice";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { MdPlaylistAdd } from "react-icons/md";
import Button from "@mui/material/Button";
import { GoCommentDiscussion } from "react-icons/go";
import { FaTrash } from "react-icons/fa";

const FeedbackList = ({ todoId }) => {
  const dispatch = useDispatch();
  const { feedbacks } = useSelector((state) => state.feedback);
  const feed = feedbacks.filter((feed) => feed.todoId === +todoId);

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
    if (input.name === "" || input.feedback === "") {
      return window.alert("모두 입력해주세요!");
    }
    dispatch(addFeedback({ ...input, todoId }));
    setInput({ name: "", feedback: "" });
  };

  const _DeleteTodo = (id) => {
    dispatch(removeFeedback(id));
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
          placeholder="20자 이내 입력"
          multiline
        />
        <AddButton onClick={onCreate}>
          <MdPlaylistAdd size="30" color="#38d9a9" />
        </AddButton>
      </InputContainer>
      <StyleContainer>
        {feedbacks
          .filter((feed) => feed.todoId == +todoId)
          .map((feed) => {
            return (
              <div key={feed.id}>
                <FeedbackContainer>
                  <div style={{ marginLeft: "25px" }}>작성자 : {feed.name}</div>
                  <div style={{ marginLeft: "25px" }}>
                    피드백 : {feed.feedback}
                  </div>
                  <Line />
                  <div style={{ marginTop: "-15px" }}>
                    <Button
                      style={{
                        marginLeft: "25px",
                        width: "215px",
                        color: "#20c997",
                        cursor: "pointer",
                      }}
                    >
                      {" "}
                      수정
                      <GoCommentDiscussion />
                    </Button>
                    <Button
                      style={{
                        width: "210px",
                        color: "#20c997",
                        cursor: "pointer",
                      }}
                    >
                      삭제
                      <FaTrash
                        onClick={() => {
                          _DeleteTodo(feed.id);
                        }}
                      />
                    </Button>
                  </div>
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

const Line = styled.div`
  margin: 25px;
  margin-top: 1px;
  border-bottom: 1px solid #e9ecef;
`;
