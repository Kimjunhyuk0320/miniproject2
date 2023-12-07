import React from 'react'
import UserUpdateContainer from '../../containers/Users/UserUpdateContainer'

const UserUpdatePage = () => {

    const username = 'gangjinsu'

  return (
    <>
        <UserUpdateContainer username={username}></UserUpdateContainer>
    </>
  )
}

export default UserUpdatePage