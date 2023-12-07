import React from 'react'
import TicketPurchaseListContainer from '../../containers/MyPage/TicketPurchaseListContainer'
import './css/TableList.css';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

const TicketPurchaseList = () => {
  return (
      <div className="TicketPurchaseList">
        <Header />
          <TicketPurchaseListContainer />
        <Footer />
      </div>
  )
}

export default TicketPurchaseList