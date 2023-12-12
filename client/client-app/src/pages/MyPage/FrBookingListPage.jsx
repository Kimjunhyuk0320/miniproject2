import React, { useContext } from 'react'
import FrBookingListContainer from '../../containers/MyPage/FrBookingListContainer'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import UserContext from '../../context/UserContext';
// import ActiveFooter from '../../layout/ActiveFooter';

const FrBookingListPage = () => {
  const { jwtSets } = useContext(UserContext)

  const username = jwtSets.parsedToken.username ?? 'GUEST'

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
