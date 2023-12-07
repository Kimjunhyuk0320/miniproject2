import React from 'react'
import TicketSalesListContainer from '../../containers/MyPage/TicketSalesListContainer'
import './css/TableList.css';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
// import ActiveFooter from '../../layout/ActiveFooter';

const TicketSalesList = () => {
  return (
    <>
      <Header />
      <div className='TicketPurchaseList'>
        <TicketSalesListContainer />
      </div>
      {/* <ActiveFooter/> */}
      <Footer />
    </>
  )
}

export default TicketSalesList