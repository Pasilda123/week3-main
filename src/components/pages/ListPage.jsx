import React from "react";
import styled, { css } from "styled-components";
import Layout from "../Layout/Layout";
import Header from "../Layout/Header";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";
import Button from "@mui/material/Button";
import { MdDone } from "react-icons/md";
import Clock from "react-live-clock";

// 할 일 목록
const ListPage = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Day
  const Week = [
    "Sun / 일요일",
    "Mon / 월요일",
    "Tue / 화요일",
    "Wed / 수요일",
    "Thu / 목요일",
    "Fri / 금요일",
    "Sat / 토요일",
  ];
  const Today = new Date().getDay();
  const PrintToday = Week[Today];

  //남은 할 일
  const Remainingtodo = todos.filter((todo) => !todo.done);

  const DeleteTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const ToggleTodo = (id) => {
    dispatch(editTodo(id));
  };

  return (
    <Layout>
      <StyleListPage>
        <Header />
        <H1>
          <Clock
            format={"YYYY.MM.DD"}
            ticking={false}
            timezone={"KR/Pacific"}
          />
        </H1>
        <Day>{PrintToday}</Day>
        <Remaining>할 일이 {Remainingtodo.length}개 남았어요!</Remaining>
        <Line />
        <StyleTodoContainer>
          {todos.map((todo) => {
            return (
              <StylingList key={todo.id}>
                <div>
                  <Circle
                    done={todo.done}
                    onClick={() => {
                      ToggleTodo(todo.id);
                    }}
                  >
                    {todo.done ? (
                      <MdDone />
                    ) : (
                      <MdDone style={{ display: "none" }} />
                    )}
                  </Circle>
                  <Title>{todo.title}</Title>
                </div>
                <div>
                  <Content>작성자 : {todo.name}</Content>
                </div>
                <Line2 />
                <Button
                  style={{
                    marginTop: "10px",
                    width: "245px",
                    color: "#20c997",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/DetailPage");
                  }}
                >
                  동료 피드백
                  <GoCommentDiscussion />
                </Button>
                <Button
                  style={{
                    marginTop: "10px",
                    width: "245px",
                    color: "#20c997",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    DeleteTodo(todo.id);
                  }}
                >
                  삭제
                  <FaTrash />
                </Button>
              </StylingList>
            );
          })}
        </StyleTodoContainer>
      </StyleListPage>
    </Layout>
  );
};
export default ListPage;

const StyleListPage = styled.div``;

const H1 = styled.h1`
  margin: 20px;
  font-size: 35px;
  color: #343a40;
`;

const Day = styled.div`
  margin: 20px;
  margin-top: 4px;
  color: #868e96;
  font-size: 15px;
`;

const Remaining = styled.div`
  margin: 20px;
  color: #20c997;
  font-size: 20px;
  margin-top: 40px;
  font-weight: bold;
`;

const Line = styled.div`
  border-bottom: 1px solid #e9ecef;
`;

// const FixButton = styled.button`
//     border:none;
//     background-color: white;

// `;

// const RemoveButton = styled.button`
//     border:none;
//     background-color: white;

// `;

const StyleTodoContainer = styled.div`
  height: 450px;
  flex-wrap: wrap;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 1px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #ccc;
  }
`;

const StylingList = styled.div`
  margin: 20px;
  height: 101px;
  align-items: center;
  overflow-y: auto;
  width: 490px;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 10px;
`;

const Circle = styled.div`
  margin: 5px;
  width: 25px;
  height: 25px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Title = styled.div`
  margin-left: 50px;
  margin-top: -35px; ;
`;

const Content = styled.div`
  margin-left: 50px;
`;

const Line2 = styled.div`
  margin-top: 5px;
  border-bottom: 1px solid #e9ecef;
`;

// const Iconbox = styled.div`
//     margin-top: 15px;
//     display:flex;
//     flex-direction: row;
//     justify-content: space-around;
//     align-items: center;
// `;
