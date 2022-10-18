import React from "react";
import styled from "styled-components";
import Layout from "../Layout/Layout";
import Header from "../Layout/Header";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

// 작성 페이지
const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    id: Date.now(),
    name: "",
    title: "",
    content: "",
    done: false,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onCreate = (e) => {
    e.preventDefault();
    if (input.name === "") {
      return window.alert("이름을 입력해주세요!");
    } else if (input.title === "") {
      return window.alert("제목과 내용을 입력해주세요!");
    } else if (
      input.name === "" ||
      input.title === "" ||
      input.content === ""
    ) {
      return window.alert("모든 항목을 기입해주셔야 합니다!");
    }
    dispatch(addTodo({ ...input }));
    setInput({ id: Date.now(), name: "", title: "", content: "", done: false });
    navigate("/ListPage");
  };

  return (
    <Layout>
      <StyleForm>
        <Header />
        <TextField 
          inputProps={{ maxLength: "10" }}
          style={{
            width: "90%",
            marginLeft: "5.25%",
            marginTop: "25px",
            marginBottom: "25px",
          }}
          fullWidth
          color="success"
          label="작성자"
          id="fullWidth"
          type="text"
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder="이름을 10자 이내로 입력해주세요."
        />
        <TextField
          inputProps={{ maxLength: "28" }}
          style={{
            width: "90%",
            marginLeft: "5.25%",
            marginTop: "25px",
            marginBottom: "25px",
          }}
          fullWidth
          color="success"
          label="제목"
          id="fullWidth"
          type="text"
          name="title"
          value={input.title}
          onChange={onChange}
          placeholder="제목을 28자 이내로 입력해주세요."
        />
        <TextField 
          inputProps={{ maxLength: "200" }}
          style={{
            width: "90%",
            marginLeft: "5.25%",
            marginTop: "25px",
            marginBottom: "25px",
          }}
          color="success"
          id="outlined-multiline-static"
          label="내용"
          type="text"
          name="content"
          multiline
          rows={4}
          value={input.content}
          onChange={onChange}
          placeholder="제목을 200자 이내로 입력해주세요."
        />
        <Fab size="100px"
        style={{ 
            width: "100px",
            height: "100px",
            padding: "20px",
            margin: "10px",
            marginTop: "40px",
            marginLeft: "220px",
            }}
            color="success" aria-label="add">
        <AddIcon onClick={onCreate} />
      </Fab>
      </StyleForm>
    </Layout>
  );
};
export default Form;

const StyleForm = styled.form``;

