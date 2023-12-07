import React from 'react'
import FrBookingListContainer from '../../containers/MyPage/FrBookingListContainer'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
// import ActiveFooter from '../../layout/ActiveFooter';

const FrBookingListPage = () => {
  const username = 'gangjinsu'

  return (
    <div className='TicketPurchaseList'>
      <Header />
      <FrBookingListContainer username={username}></FrBookingListContainer>
      {/* <ActiveFooter/> */}
      <Footer />
    </div>
  )
}

export default FrBookingListPage
