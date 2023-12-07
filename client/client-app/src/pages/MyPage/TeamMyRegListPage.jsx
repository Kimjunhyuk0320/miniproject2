import React from 'react'
import TeamMyRegListContainer from '../../containers/MyPage/TeamMyRegListContainer'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

const TeamMyRegListPage = () => {
  const username = 'gangjinsu'



  return (
    <div className='TicketPurchaseList'>
      <Header />
      <TeamMyRegListContainer username={username}></TeamMyRegListContainer>
      <Footer />
    </div>
  )
}

export default TeamMyRegListPage