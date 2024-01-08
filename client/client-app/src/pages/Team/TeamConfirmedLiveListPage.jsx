import React, { useContext } from 'react'
import TeamConfirmedLiveListContainer from '../../containers/Team/TeamConfirmedLiveListContainer'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import { LoginContext } from '../../contexts/LoginContextProvider'

const TeamConfirmedLiveListPage = () => {

  const {userInfo} = useContext(LoginContext)
  
  const username = userInfo.username

  return (
    <div className='TicketPurchaseList'>
      <Header />
      <TeamConfirmedLiveListContainer username={username}></TeamConfirmedLiveListContainer>
      <Footer />
    </div>
  )
}

export default TeamConfirmedLiveListPage