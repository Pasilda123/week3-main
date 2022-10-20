import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaEnvelopeOpenText } from "react-icons/fa";


// 헤더
const Header = () => {
    const navigate = useNavigate();
    return (
        <StyleHeader>
            <Button style={{cursor:"pointer"}}onClick={() => {navigate("/")}}><FaEnvelopeOpenText/>Home</Button>
        <Title>My Todo List</Title>
        </StyleHeader>
    );
    };

export default Header;

const StyleHeader = styled.div`
  margin: 15px;
  max-width: 100%;
  border: 1px solid #ddd;
  height: 60px;
  display: flex;
  justify-content: space-between;
  border-radius: 16px;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 24px;
`;

const Button = styled.button`
  background-color: white;
  border:none;
  color:#20c997;
  font-size: 18px;
`;

const Title = styled.div`
  color:#20c997;
  font-size: 18px;
  margin-bottom: 7px;
`;


