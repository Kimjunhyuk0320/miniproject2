import React from 'react'
import TeamConfirmedLiveListContainer from '../../containers/Team/TeamConfirmedLiveListContainer'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

const TeamConfirmedLiveListPage = () => {

    const username = 'gangjinsu'

  return (
    <div className='TicketPurchaseList'>
      <Header />
      <TeamConfirmedLiveListContainer username={username}></TeamConfirmedLiveListContainer>
      <Footer />
    </div>
  )
}

export default TeamConfirmedLiveListPage