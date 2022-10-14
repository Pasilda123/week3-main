import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaEnvelopeOpenText } from "react-icons/fa";




// 헤더
const Header = () => {
    const navigate = useNavigate();
    return (
        <StyleHeader>
            <FaEnvelopeOpenText size="30" color="Green" onClick={() => {navigate("/")}}/>
        <div>My Todo List</div>
        </StyleHeader>
    );
    };

export default Header;

const StyleHeader = styled.div`
  margin: 10px;
  border: 1px solid #ddd;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 24px;
`;
