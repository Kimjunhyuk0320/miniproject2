import React from 'react'
import TeamMyRegListContainer from '../../containers/MyPage/TeamMyRegListContainer'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
// import ActiveFooter from '../../layout/ActiveFooter';

const TeamMyRegListPage = () => {
  const username = 'gangjinsu'



  return (
    <div className='TicketPurchaseList'>
      <Header />
      <TeamMyRegListContainer username={username}></TeamMyRegListContainer>
      {/* <ActiveFooter/> */}
      <Footer />
    </div>
  )
}

export default TeamMyRegListPage