import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Homenavigate = () => {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <RedirectForm
        onClick={() => {
          navigate("/Form");
        }}
      >
        작성 페이지
      </RedirectForm>
      <RedirectListPage
        onClick={() => {
          navigate("/ListPage");
        }}
      >
        할 일 목록
      </RedirectListPage>
    </PageContainer>
  );
};
export default Homenavigate;

const PageContainer = styled.div``;

const RedirectForm = styled.button`
  margin: 10px;
`;

const RedirectListPage = styled.button`
  margin: 10px;
`;
