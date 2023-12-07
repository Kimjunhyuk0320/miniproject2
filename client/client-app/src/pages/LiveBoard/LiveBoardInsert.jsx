import React from 'react'
import LiveBoardInsertContainer from '../../containers/LiveBoard/LiveBoardInsertContainer'
import './css/insert.css'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import ActiveFooter from '../../layout/ActiveFooter';
const LiveBoardInsert = () => {
  return (
    <>
      <Header />
      <div className='LiveBoardInsert'>
        <LiveBoardInsertContainer />
      </div>
      <ActiveFooter/>
      <Footer />
    </>
  )
}

export default LiveBoardInsert