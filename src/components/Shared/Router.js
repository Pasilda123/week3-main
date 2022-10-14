import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Form from '../pages/Form';
import ListPage from '../pages/ListPage';
import DetailPage from '../pages/DetailPage';

const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/ListPage" element={<ListPage />} />
          <Route path="/DetailPage" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;