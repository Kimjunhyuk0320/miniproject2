import React from 'react';
import MyInfoContainer from '../../containers/MyPage/MyInfoContainer';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import './css/MyInfo.css';
import ActiveFooter from '../../layout/ActiveFooter';

const MyInfo = () => {
  return (
    <>
      <Header/>
      <MyInfoContainer/>
      <ActiveFooter/>
      <Footer/>
    </>
  )
}

export default MyInfo