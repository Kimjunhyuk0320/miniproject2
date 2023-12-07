import React from 'react'
import TeamRegListContainer from '../../containers/MyPage/TeamRegListContainer'

import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
// import ActiveFooter from '../../layout/ActiveFooter';
const TeamRegListPage = () => {
  const username = 'gangjinsu'
  return (
    <div className='TicketPurchaseList'>
      <Header />
      <div className='teamList'>
        <TeamRegListContainer username={username}></TeamRegListContainer>
      </div>
      {/* <ActiveFooter/> */}
      <Footer />
    </div>
  )
}

export default TeamRegListPage