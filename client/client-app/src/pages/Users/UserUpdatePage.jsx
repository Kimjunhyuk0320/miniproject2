import React, { useContext } from 'react'
import UserUpdateContainer from '../../containers/Users/UserUpdateContainer'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import UserContext from '../../context/UserContext';

const UserUpdatePage = () => {
  const {jwtSets} = useContext(UserContext)

  const username = jwtSets.parsedToken.username ?? 'GUEST'

  return (
    <>
      <Header />
      <UserUpdateContainer username={username}></UserUpdateContainer>
      <Footer />
    </>
  )
}

export default UserUpdatePage