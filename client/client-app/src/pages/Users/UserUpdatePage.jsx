import React from 'react'
import UserUpdateContainer from '../../containers/Users/UserUpdateContainer'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import './css/UserUpdatePage.css';

const UserUpdatePage = () => {

  const username = 'gangjinsu'

  return (
    <>
      <Header />
      <div className='UserUpdatePage'>

      <UserUpdateContainer username={username}></UserUpdateContainer>
      </div>
      <Footer />
    </>
  )
}

export default UserUpdatePage