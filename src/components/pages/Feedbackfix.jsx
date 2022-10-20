/* eslint-disable */
import Button from "@mui/material/Button";
import { GoCommentDiscussion } from "react-icons/go";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import { removeFeedback } from "../redux/modules/feedbackSlice";
import { useDispatch } from "react-redux";
/* import styled from "styled-components"; */

const Feedbackfix = ({ feed }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(feed); // 작성자, 내용

  const [newinput, setNewInput] = useState(feed); // 수정 작성자, 내용

  const updateFeedback = (e) => {
    e.preventDefault();
    dispatch()
    setNewInput({ id:Date.now(), name: "", feedback: "" });
  }

  const DeleteTodo = (id) => {
    dispatch(removeFeedback(id));
  };

  const handleChangeName = (e) => {
    setNewInput((current) => ({ ...current, name: e.target.value }));
  };

  const handleChangeFeedBack = (e) => {
    setNewInput((current) => ({ ...current, feedback: e.target.value }));
  };

  const [isedit, setIsEdit] = useState(false);

  const handleClickEdit = () => {
    setIsEdit((current) => !current);
  };

  return (
    <div>
      {!isedit ? (
        <>
          <div style={{ marginLeft: "25px" }}>작성자 : {input.name}</div>
          <div style={{ marginLeft: "25px" }}>피드백 : {input.feedback}</div>
        </>
      ) : (
        <>
          <input
            onChange={handleChangeName}
            value={newinput.name}
            style={{ marginLeft: "25px" }}
          />

          <input
            onChange={handleChangeFeedBack}
            value={newinput.feedback}
            style={{ marginLeft: "25px" }}
          />
          <button onClick={updateFeedback}>완료</button>
        </>
      )}
      <Button
        onClick={handleClickEdit}
        style={{
          marginLeft: "25px",
          width: "215px",
          color: "#20c997",
          cursor: "pointer",
        }}
      >
        수정
        <GoCommentDiscussion />
      </Button>

      <Button
        onClick={DeleteTodo}
        style={{ width: "210px", color: "#20c997", cursor: "pointer" }}
      >
        삭제
        <FaTrash />
      </Button>
    </div>
  );
};

export default Feedbackfix;

/* const Line = styled.div`
  margin: 25px;
  margin-top: 1px;
  border-bottom: 1px solid #e9ecef;
`;
 */