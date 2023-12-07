import React from 'react'
import LoginContainer from '../../containers/Users/LoginContainer'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import './css/LoginPage.css';

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className='LoginPage'>
        <LoginContainer></LoginContainer>
      </div>
      <Footer />
    </>
  )
}

export default LoginPage