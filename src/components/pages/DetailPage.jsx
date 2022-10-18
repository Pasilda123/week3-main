
import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../Layout/Layout";
import Header from "../Layout/Header";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getId } from "../redux/modules/todos";
import { FaReply, FaTools } from "react-icons/fa";

// 할 일 목록 -> 상세 페이지(Reply edit,remove)
const DetailPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    id: Date.now(),
    name: "",
    content: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const todo = useSelector((state) => state.todos.todos);
  const { id } = useParams();

  const data = todo.find((data) => data.id == id);

  useEffect(() => {
    dispatch(getId(Number(id)));
  }, [dispatch, id]);

  const onCreate = (e) => {
    e.preventDefault();
    // if (input.name === "") {
    //   return window.alert("이름을 입력해주세요!");
    // } else if (input.title === "") {
    //   return window.alert("제목과 내용을 입력해주세요!");
    // } else if (
    //   input.name === "" ||
    //   input.title === "" ||
    //   input.content === ""
    // ) {
    //   return window.alert("모든 항목을 기입해주셔야 합니다!");
    // }
    
    setInput({ id: Date.now(), name: "", comment: "" });
    
  };

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
          <Title>{data.title}</Title>
        </div>
        <Line />
        <Content>세부내용: {data.content}</Content>
        <FixButton>
          <FaTools size="20px" />
        </FixButton>
        <Line />
        <Reply>동료 피드백</Reply>
        <input type="text" name="name" />
        <input type="text" name="comment" />
        <button onChange={onChange} onClick={onCreate}>추가</button>
        <button>삭제</button>
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
  background-color: green;
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