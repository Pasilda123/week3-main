import React from "react";
import styled from "styled-components";
import Layout from "../Layout/Layout";
import Header from "../Layout/Header";
// import { Link } from "react-router-dom";
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';

// 작성 페이지

const Form = () => {
  // const id = Date.now();
  // const dispatch = useDispatch
  // const [input, setInput] = usestate({ id:0, name:"", title:"", content:"" done:false })

  return (
    <Layout>
      <StyleForm>
        <Header />
        {/* <Title>여기는 작성페이지입니다</Title> */}
        {/* <RedirectHome to="/">Home</RedirectHome> */}
        <Title>이름</Title>
        <StyleInput
          autoFocus
          type="text"
          name="name"
          placeholder="이름을 5자 이내로 입력해주세요."
          maxLength={5}
          required /* value={input.name} */
        />
        <Title>제목</Title>
        <StyleInput
          type="text"
          name="title"
          placeholder="제목을 28자 이내로 입력해주세요."
          maxLength={27}
          required /* value={input.title} */
        />
        <Title>내용</Title>
        <StyleContent
          type="text"
          name="content"
          placeholder="내용을 200자 이내로 입력해주세요."
          maxLength={200}
          required /* value={input.content} */
        />
        <StyleButton>추가하기</StyleButton>
      </StyleForm>
    </Layout>
  );

  /* 이름,제목,내용같은 인풋값을 다 넣고 
            제출과 동시에 할 일 목록 리다이렉트 */
};
export default Form;

const StyleForm = styled.form``;

const Title = styled.div`
  margin: 15px;
`;

// const RedirectHome = styled(Link)`
//   margin:10px;
// `;

const StyleInput = styled.input`
  margin: 10px;
  width: 90%;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 12px;
  font-size: 14px;
`;

const StyleContent = styled.textarea`
  margin: 10px;
  width: 90%;
  height: 120px;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 12px;
  font-size: 14px;
`;

const StyleButton = styled.button`
  padding: 20px;
  margin: 10px;
  margin-top: 40px;
  margin-left: 200px;
`;
