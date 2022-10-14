import React from "react";
import styled from "styled-components";


// 레이아웃
const Layout = ({ children }) => {
  return <StyleLayout>{children}</StyleLayout>;
};

export default Layout;

const StyleLayout = styled.div`
  max-width: 510px;
  min-width: 800px;
  margin: 0 auto;
`;