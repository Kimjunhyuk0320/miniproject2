import React from 'react'
import TicketPurchaseListContainer from '../../containers/MyPage/TicketPurchaseListContainer'
import './css/TableList.css';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

const TicketPurchaseList = () => {
  return (
    <>
      <Header />
      <div className="TicketPurchaseList">
        <TicketPurchaseListContainer />
      </div>
      <Footer />
    </>
  )
}

export default TicketPurchaseList