import React from 'react';
import MyPageContainer from '../../containers/MyPage/MyPageConatiner';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
// import './css/MyPage.css';

const MyPage = () => {
  return (
    <>
      <Header />
      <div className='MyPage'>
        <MyPageContainer />
      </div>
      <Footer />
    </>
  )
}

export default MyPage