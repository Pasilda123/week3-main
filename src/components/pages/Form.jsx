import React from "react";
import styled from "styled-components";
import Layout from '../Layout/Layout';
import Header from '../Layout/Header';
import { Link } from "react-router-dom";


// 작성 페이지

const Form = () => {
    
    return (
        <Layout>
        <StyleForm> 
        <Header/>
        <Title>여기는 작성페이지입니다</Title>
        <RedirectHome to="/">Home</RedirectHome>
        </StyleForm>   
        </Layout>
    );
}           
            /* 이름,제목,내용같은 인풋값을 다 넣고 
            제출과 동시에 할 일 목록 리다이렉트 */

export default Form;

const StyleForm = styled.div`
`;

const Title = styled.div`
margin:10px;
`;

const RedirectHome = styled(Link)`
margin:10px;
`;


