import React from 'react'
import FrBookingListContainer from '../../containers/MyPage/FrBookingListContainer'

const FrBookingListPage = () => {
  const username = 'gangjinsu'
  
  return (
    <>
      <FrBookingListContainer username={username}></FrBookingListContainer>
    </>
  )
}

export default FrBookingListPage
