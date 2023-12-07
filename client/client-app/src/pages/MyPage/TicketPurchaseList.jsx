import React from 'react'
import TicketPurchaseListContainer from '../../containers/MyPage/TicketPurchaseListContainer'
import './css/TableList.css';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
// import ActiveFooter from '../../layout/ActiveFooter';

const TicketPurchaseList = () => {
  return (
    <div className="TicketPurchaseList">
      <Header />
      <TicketPurchaseListContainer />
      {/* <ActiveFooter /> */}
      <Footer />
    </div>
  )
}

export default TicketPurchaseList