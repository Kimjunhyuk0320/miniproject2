import React from 'react'
import FrBookingListContainer from '../../containers/MyPage/FrBookingListContainer'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

const FrBookingListPage = () => {
  const username = 'gangjinsu'

  return (
    <div className='TicketPurchaseList'>
      <Header />
      <FrBookingListContainer username={username}></FrBookingListContainer>
      <Footer />
    </div>
  )
}

export default FrBookingListPage
