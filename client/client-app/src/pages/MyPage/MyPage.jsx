import React from 'react';
import MyPageContainer from '../../containers/MyPage/MyPageConatiner';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import './css/MyPage.css';

const MyPage = () => {
  return (
    <>
      <Header />
      <MyPageContainer />
      <Footer />
    </>
  )
}

export default MyPage