/* eslint-disable */
/* import React, { useEffect } from "react"; */
import styled from "styled-components";
import Layout from "../Layout/Layout";
import Header from "../Layout/Header";
import { /* useDispatch, */ useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaReply, FaTools } from "react-icons/fa";
import Feedback from '../pages/Feedback'


// 할 일 목록 -> 상세 페이지(Reply edit,remove)
const DetailPage = () => {
  /* const dispatch = useDispatch(); */
  const todo = useSelector((state) => state.todos.todos);
  const navigate = useNavigate();

  const { id } = useParams();
  const data = todo.find((data) => data.id === +id)

  return (
    <Layout>
      <StyleDetailPage>
        <Header />
        <div>
        <RedirectListPage>
            <FaReply
              size="20px"
              onClick={() => {
                navigate("/ListPage");
              }}
            />
          </RedirectListPage>
          <Title>{data?.title}</Title>
        </div>
        <Line />
        <Content>세부내용: {data?.content}</Content>
        <FixButton>
          <FaTools size="20px" />
        </FixButton>
        <Line />
        <Reply>동료 피드백</Reply>
        <Feedback todoId={+id}/>
      </StyleDetailPage>
    </Layout>
  );
};
export default DetailPage;

const StyleDetailPage = styled.div``;

const Title = styled.div`
  width: auto;
  margin: 20px;
  font-size: 30px;
`;

const Line = styled.div`
  margin: 25px;
  margin-top: 1px;
  border-bottom: 1px solid #e9ecef;
`;

const Content = styled.div`
  margin: 25px;
  width: auto;
  height: 200px;

`;

const RedirectListPage = styled.button`
  cursor: pointer;
  margin-left: 87%;
  background-color: white;
  border: none;
  color: #38d9a9;
  flex-wrap: wrap;
`;

const FixButton = styled.button`
  cursor: pointer;
  margin-left: 87%;
  margin-bottom: 10px;
  background-color: white;
  border: none;
  color: #38d9a9;
`;

const Reply = styled.div`
  width: auto;
  margin: 25px;
`;