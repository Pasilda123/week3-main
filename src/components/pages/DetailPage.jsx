import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Layout from '../Layout/Layout';
import Header from '../Layout/Header';


// 할 일 목록 -> 상세 페이지(Reply edit,remove)

const DetailPage = () => {
    return (
            <Layout>
            <StyleDetailPage>
            <Header/> 
                <Title>여기는 상세페이지입니다.</Title>
                        <RedirectHome to="/">Home</RedirectHome>
                        <RedirectListPage to="/ListPage">ListPage</RedirectListPage>
                </StyleDetailPage>
            </Layout>
    )
}

export default DetailPage;

const StyleDetailPage = styled.div`
`;

const Title = styled.div`
margin:10px;
`;

const RedirectHome = styled(Link)`
margin:10px;
`;

const RedirectListPage = styled(Link)`
margin:10px;
`;

