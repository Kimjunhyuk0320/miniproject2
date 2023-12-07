import React from 'react'
import FrMyBookingListContainer from '../../containers/MyPage/FrMyBookingListContainer'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

const FrMyBookingListPage = () => {
  const username = 'gangjinsu'

  return (
    <div className='TicketPurchaseList'>
      <Header />
      <FrMyBookingListContainer username={username}></FrMyBookingListContainer>
      <Footer />
    </div>
  )
}

export default FrMyBookingListPage