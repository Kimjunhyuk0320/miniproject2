import React, { useContext } from 'react'
import TeamConfirmedLiveListContainer from '../../containers/Team/TeamConfirmedLiveListContainer'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import UserContext from '../../context/UserContext'

const TeamConfirmedLiveListPage = () => {

  const {jwtSets} = useContext(UserContext)

  const username = jwtSets.parsedToken.username ?? 'GUEST'

  return (
    <div className='TicketPurchaseList'>
      <Header />
      <TeamConfirmedLiveListContainer username={username}></TeamConfirmedLiveListContainer>
      <Footer />
    </div>
  )
}

export default TeamConfirmedLiveListPage