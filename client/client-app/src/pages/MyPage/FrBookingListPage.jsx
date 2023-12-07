import React from 'react'
import FrBookingListContainer from '../../containers/MyPage/FrBookingListContainer'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

const FrBookingListPage = () => {
  const username = 'gangjinsu'

  return (
    <>
      <Header />
      <FrBookingListContainer username={username}></FrBookingListContainer>
      <Footer />
    </>
  )
}

export default FrBookingListPage
