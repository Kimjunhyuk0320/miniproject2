import React from 'react'
import LoginContainer from '../../containers/Users/LoginContainer'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

const LoginPage = () => {
  return (
    <>
      <Header />
      <LoginContainer></LoginContainer>
      <Footer />
    </>
  )
}

export default LoginPage