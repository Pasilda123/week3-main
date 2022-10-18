import * as React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import HorizontalNonLinearStepper from "./Stepper";
import { FaTasks, FaPen } from "react-icons/fa";

const Homenavigate = () => {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <HorizontalNonLinearStepper />
      <RedirectForm
        style={{
          cursor: "pointer",
          width: "100px",
          height: "100px",
          margin: "10px",
          marginLeft: "20%",
          borderRadius: "50px",
          border: "1px solid #38d9a9",
        }}
        onClick={() => {
          navigate("/Form");
        }}
      >
        <FaPen size="30px" color="#38d9a9" />
      </RedirectForm>
      <RedirectListPage
        style={{
          cursor: "pointer",
          width: "100px",
          height: "100px",
          margin: "10px",
          marginLeft: "20%",
          marginTop: "10%",
          borderRadius: "50px",
          border: "1px solid #38d9a9",
        }}
        onClick={() => {
          navigate("/ListPage");
        }}
      >
        <FaTasks size="30px" color="#38d9a9" />
      </RedirectListPage>
    </PageContainer>
  );
};
export default Homenavigate;

const PageContainer = styled.div``;
const RedirectForm = styled.button``;
const RedirectListPage = styled.button``;
