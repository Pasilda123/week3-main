import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Container from "@mui/material/Container";

// 레이아웃
const Layout = ({ children }) => {
  const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

  return (
    <Container fixed>
      <StyleLayout>
        <GlobalStyle />
        {children}
      </StyleLayout>
    </Container>
  );
};

export default Layout;

const StyleLayout = styled.div`
  width: 550px;
  max-width: 100%;
  height: 768px;
  min-height: 768px;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 42px;
  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
`;
