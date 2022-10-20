/* eslint-disable */
import styled from "styled-components";
import Layout from "../Layout/Layout";
import Header from "../Layout/Header";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { FaReply, FaTools } from "react-icons/fa";
import Feedback from '../pages/Feedback'


// 할 일 목록 -> 상세 페이지(Reply edit,remove)
const DetailPage = () => {
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
          <Title>{data.title}</Title>
        </div>
        <Line />
        <Content>{data.content}</Content>
        <FixButton>
          <FaTools size="20px" />
        </FixButton>
        <Line />
        <Feedback todoId={+id}/>
      </StyleDetailPage>
    </Layout>
  );
};
export default DetailPage;

const StyleDetailPage = styled.div``;

const Title = styled.div`
  width: 88.3%;
  margin-left: 35px;
  font-size: 30px;
  margin-bottom: 8px;
`;

const Line = styled.div`
  margin: 25px;
  margin-top: 1px;
  border-bottom: 1px solid #e9ecef;
`;

const Content = styled.div`
  margin-left: 35px;
  width: 88.3%;
  height: 90px;
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

