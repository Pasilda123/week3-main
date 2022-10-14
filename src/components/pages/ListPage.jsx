import React from "react";
import styled from "styled-components";
import Layout from '../Layout/Layout';
import Header from '../Layout/Header';
import { Link } from "react-router-dom";

// 할 일 목록

const ListPage = () => {
    return (
        
            <Layout>
            <StyleListPage>
            <Header/> 
            <Title>여기는 할 일 목록입니다.</Title>
            <RedirectHome to="/">Home</RedirectHome>
            <RedirectDetailPage to="/DetailPage">DetailPage</RedirectDetailPage>
            </StyleListPage>
            </Layout>
        
    )
        

}

export default ListPage;

const StyleListPage = styled.div`
`;

const Title = styled.div`
margin:10px;
`;

const RedirectHome = styled(Link)`
margin:10px;
`;

const RedirectDetailPage = styled(Link)`
margin:10px;
`;

