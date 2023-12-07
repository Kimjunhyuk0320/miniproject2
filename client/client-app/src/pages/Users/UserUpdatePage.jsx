import React from 'react'
import UserUpdateContainer from '../../containers/Users/UserUpdateContainer'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

const UserUpdatePage = () => {

  const username = 'gangjinsu'

  return (
    <>
      <Header />
      <UserUpdateContainer username={username}></UserUpdateContainer>
      <Footer />
    </>
  )
}

export default UserUpdatePage