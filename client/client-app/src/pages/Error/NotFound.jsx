import React from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Piano from "../../layout/Piano.jsx";

// TODO : 404 페이지 꾸미기
const NotFound = () => {
  return (
    <>
      <Header />
      <Piano />
      <div className="">
        <h3>죄송합니다. 현재 찾을 수 없는 페이지를 요청하셨습니다.</h3>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
