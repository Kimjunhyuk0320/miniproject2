import React from 'react'
import FrMyBookingListContainer from '../../containers/MyPage/FrMyBookingListContainer'

const FrMyBookingListPage = () => {
  const username = 'gangjinsu'
  
  return (
    <>
      <FrMyBookingListContainer username={username}></FrMyBookingListContainer>
    </>
  )
}

export default FrMyBookingListPage