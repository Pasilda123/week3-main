import React from "react";
import Header from '../Layout/Header';
import Layout from '../Layout/Layout';
import Homenavigate from '../Home/Homenavigate';


// 초기화면

const Home = () => {
    
    return (
      <Layout>
        <Header />
        <Homenavigate />
      </Layout>
    );
  };

export default Home;


