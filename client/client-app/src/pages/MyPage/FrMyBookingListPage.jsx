import React, { useContext } from 'react'
import FrMyBookingListContainer from '../../containers/MyPage/FrMyBookingListContainer'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import UserContext from '../../context/UserContext';
// import ActiveFooter from '../../layout/ActiveFooter';

const FrMyBookingListPage = () => {
  const {jwtSets} = useContext(UserContext)
  const username = jwtSets.parsedToken.username ?? 'GUEST'

  return (
    <div className='TicketPurchaseList'>
      <Header />
      <FrMyBookingListContainer username={username}></FrMyBookingListContainer>
      {/* <ActiveFooter/> */}
      <Footer />
    </div>
  )
}

export default FrMyBookingListPage